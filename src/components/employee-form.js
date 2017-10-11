import React from 'react';
import { connect } from 'react-redux';
import { Picker, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { employeeUpdate } from './../actions/employee';

import { CardSection, Input } from './common';

class EmployeeForm extends React.Component {

  render() {
    return (
      <View>
        <CardSection>
          <Input
            label='Name'
            placeholder='Jane Doe'
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>
        <CardSection>
          <Input
            label='Phone'
            placeholder='555-5555555'
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>
        <CardSection style={styles.pickerCardSection}>
          <Text style={styles.pickerLabel}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label='Monday' value='Monday' />
            <Picker.Item label='Tuesday' value='Tuesday' />
            <Picker.Item label='Wednesday' value='Wednesday' />
            <Picker.Item label='Thursday' value='Thursday' />
            <Picker.Item label='Friday' value='Friday' />
            <Picker.Item label='Saturday' value='Saturday' />
            <Picker.Item label='Sunday' value='Sunday' />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

EmployeeForm.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  shift: PropTypes.string,
  employeeUpdate: PropTypes.func,
};

const styles = {
  pickerLabel: {
    fontSize: 18,
    paddingLeft: 20,
  },
  pickerCardSection: {
    flexDirection: 'column',
  },
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
})(EmployeeForm);
