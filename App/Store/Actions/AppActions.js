export default class AppActions {

    static ADD_PATIENT = "ADD_PATIENT";
    static ADD_PATIENT_SUCCESSFULL = "ADD_PATIENT_SUCCESSFULL";
    static ADD_PATIENT_FAILED = "ADD_PATIENT_FAILED";

    static GET_PATIENT = 'GET_PATIENT';
    static GET_PATIENT_SUCCESSFUL = 'GET_PATIENT_SUCCESSFUL';
    static GET_PATIENT_FAILED = 'GET_PATIENT_FAILED';

    static REMOVE_PATIENT = "REMOVE_PATIENT";

    static SEARCH_PATIENT = 'SEARCH_PATIENT';


    static add_patient(payload) {
        return {
            type: AppActions.ADD_PATIENT,
            payload: payload
        }
    }

    static getPatient() {
        return {
            type: AppActions.GET_PATIENT,
        }
    }

    static removedPatient(index) {
        // alert(index);
        return {
            type: AppActions.REMOVE_PATIENT,
            payload: index
        }
    }

    static searchPatient(data) {
        // alert(data);
        return {
            type: AppActions.SEARCH_PATIENT,
            payload: data
        }
    }
}