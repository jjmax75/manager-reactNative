/* eslint filenames/no-index: 0 */
import { combineReducers } from 'redux';

import Auth from './auth';
import EmployeeForm from './employee-form';
import Employee from './employee';

export default combineReducers({
  auth: Auth,
  employeeForm: EmployeeForm,
  employees: Employee,
});
