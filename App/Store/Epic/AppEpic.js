import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import AppActions from "../Actions/AppActions";
import LocalStorage from "../../Services/localStorage";
import { AsyncStorage } from "react-native";

export default class AppEpic {
    constructor() {
        this.patientList = ""
    }
    //Epic middleware for signup
    static addPatients = (action$) =>
        action$.ofType(AppActions.ADD_PATIENT)
            .debounceTime(1000)
            .switchMap(({ payload }) => {
                return Observable.fromPromise(AsyncStorage.setItem('patients', JSON.stringify(payload)))
                    .switchMap(arr => {
                        AsyncStorage.getItem('patients', (error, result) => {
                            this.patientList = result;
                        });
                        if (this.patientList) {
                            return Observable.of({
                                type: AppActions.ADD_PATIENT_SUCCESSFULL,
                                payload: JSON.stringify(payload)
                            })
                        }
                        else {
                            return Observable.of({
                                type: AppActions.ADD_PATIENT_FAILED,
                                payload: "Not Saved"
                            })
                        }
                    })
            })
    static fetchPatients = (action$) =>
        action$.ofType(AppActions.GET_PATIENT)
            .switchMap(() => {
                let data = "";
                return Observable.fromPromise(AsyncStorage.getItem('patients', (error, result) => {
                    this.patientList = result;
                })).switchMap(arr => {
                    if (this.patientList) {
                        return Observable.of({
                            type: AppActions.GET_PATIENT_SUCCESSFUL,
                            payload: this.patientList
                        })
                    }
                    else {
                        return Observable.of({
                            type: AppActions.GET_PATIENT_FAILED,
                            payload: "Error"
                        })
                    }

                })
            })

    static searchPatients = (action$) =>
        action$.ofType(AppActions.SEARCH_PATIENT)
            .switchMap(({ payload }) => {
                return Observable.from(AsyncStorage.getItem("patients"))
                    .switchMap(arr => {
                        var data = JSON.parse(arr);
                        data = JSON.stringify(data.filter(function (el) {
                            return el.firstName.toLowerCase().indexOf(payload.toLowerCase()) > -1;
                        }))
                        return Observable.of({
                            type: AppActions.GET_PATIENT_SUCCESSFUL,
                            payload: data
                        })
                    })
                console.log(this.patientList)
                return Observable.fromPromise(new Promise((resolve, reject) => {
                    AsyncStorage.getItem('Patients', (error, result) => {
                        resolve(result);
                        reject(error);
                    })
                })).switchMap(({ resolve }) => {
                    console.log("resove", resolve);
                    return Observable.of({
                        type: AppActions.GET_PATIENT_SUCCESSFUL,
                        payload: this.patientList
                    })
                })
            })
    static removePatients = (action$) =>
        action$.ofType(AppActions.REMOVE_PATIENT)
            .switchMap(({ payload }) => {
                return Observable.from(AsyncStorage.getItem("patients"))
                    .switchMap(arr => {
                        var data = JSON.parse(arr);
                        data.splice(payload, 1)
                        data = JSON.stringify(data);
                        AsyncStorage.setItem('patients', data)
                        // console.log(data);
                        return Observable.of({
                            type: AppActions.GET_PATIENT_SUCCESSFUL,
                            payload: data
                        })
                    })


            })
}

