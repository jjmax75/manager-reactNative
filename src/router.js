import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/login-form';

import EmployeeList from './components/employee-list';
import EmployeeCreate from './components/employee-create';
import EmployeeEdit from './components/employee-edit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar={true}>
        <Scene key='auth'>
          <Scene
            key='login'
            component={LoginForm}
            title='Please Login'
            initial
          />
        </Scene>
        <Scene key='main'>
          <Scene
            key='employeeList'
            component={EmployeeList}
            title='Employee List'
            rightTitle='Add'
            onRight={() => Actions.employeeCreate()}
            initial
          />
          <Scene
            key='employeeCreate'
            component={EmployeeCreate}
            title='Create Employee'
          />
          <Scene
            key='employeeEdit'
            component={EmployeeEdit}
            title='Edit Employee'
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
