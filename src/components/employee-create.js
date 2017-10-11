import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { employeeCreate } from './../actions/employee';

import { Card, CardSection, Button } from './common';
import EmployeeForm from './employee-form';

class EmployeeCreate extends React.Component {
  constructor(props) {
    super(props);

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button
            onPress={this.onButtonPress}
          >
            Create Employee
          </Button>
        </CardSection>
      </Card>
    );
  }
}

EmployeeCreate.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string,
  employeeCreate: PropTypes.func,
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeCreate,
})(EmployeeCreate);
