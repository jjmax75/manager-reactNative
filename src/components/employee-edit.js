import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Communications from 'react-native-communications';

import { employeeUpdate, employeeSave, employeeDelete } from './../actions/employee';

import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './employee-form';

class EmployeeEdit extends React.Component {
  constructor(props) {
    super(props);

    this.onButtonPress = this.onButtonPress.bind(this);
    this.onTextPress = this.onTextPress.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.employeeDelete = this.employeeDelete.bind(this);

    this.state={
      showModal: false,
    };
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  toggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  employeeDelete() {
    this.props.employeeDelete({uid: this.props.employee.uid});
  }

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button
            onPress={this.onButtonPress}
          >
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button
            onPress={this.onTextPress}
          >
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.toggleModal}>
            Fire Employee!
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.employeeDelete}
          onDecline={this.toggleModal}
        >
          Are you sure you want to fire this employee?
        </Confirm>
      </Card>
    );
  }
}

EmployeeEdit.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string,
  employeeUpdate: PropTypes.func,
  employeeSave: PropTypes.func,
  employeeDelete: PropTypes.func,
  employee: PropTypes.object,
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeSave, employeeDelete,
})(EmployeeEdit);
