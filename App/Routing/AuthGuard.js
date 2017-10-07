import React from 'react';
import { AsyncStorage } from "react-native";
import { Actions } from 'react-native-router-flux';

const authGuard = () => {
    console.log("Auth Guard Staer", authGuard)
    return (
        AsyncStorage.getItem('token', (err, res) => {
            if (res) {
                Actions.dashboard();
            }
            else {
                return false
            }
        })
    )
};

export default authGuard;