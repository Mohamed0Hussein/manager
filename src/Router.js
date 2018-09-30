import React from 'react';
import {Scene,Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate';
const RouterComponent= () => {
    return(
        <Router sceneStyle={{paddingTop:50}}>

        <Scene key='auth' initial>

             <Scene key = 'login' component={LoginForm} title='Please Login' initial />

        </Scene>

        <Scene key='main' >
            <Scene key = 'employeeList' component={EmployeeList} title='Employees'
            rightTitle = 'Add' 
            onRight={() => Actions.createForm()}/>
            <Scene key = 'createForm' component={EmployeeCreate} title = 'Create New Employee'/>
            </Scene>
        </Router>
    );
};

export default RouterComponent;