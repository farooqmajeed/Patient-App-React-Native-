import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Platform } from "react-native";
import { SignUp, Login } from '../Container/';
import { PatientProfile } from '../Components/index'
import { AddPatientContainer as AddPatient, PatientListContainer as PatientList } from '../Container/index';

import { Dashboard } from '../Components'
const RouterComponent = StackNavigator({
    login: { screen: Login },
    signup: { screen: SignUp },
    dashboard: {
        screen: TabNavigator(
            {
                Home: {
                    screen: Dashboard,
                },
                AddPatient: { screen: AddPatient },
                PatientList: { screen: PatientList }

            },
            {
                tabBarOptions: {
                    activeTintColor: Platform.OS === 'ios' ? '#9B26AF' : '#fff'
                },
                tabBarPosition: "bottom", swipeEnabled: false, animationEnabled: false
            }
        )
    },
    Profile: { screen: PatientProfile }
},
    { navigationOptions: { header: null, initialRouterName: 'dashboard' } }
);

export default RouterComponent;