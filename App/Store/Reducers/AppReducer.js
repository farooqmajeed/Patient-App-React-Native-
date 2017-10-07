import AppActions from './../Actions/AppActions';

const INITIAL_STATE = {
    data: null,
    isAdd: false,
    isProcessing: false,
    isError: false,
    errorMessage: {}
}

function AuthReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AppActions.ADD_PATIENT:
            return { ...state, isProcessing: true, isAdd: false, isError: false };
        case AppActions.ADD_PATIENT_SUCCESSFULL:
            return { ...state, isProcessing: false, isAdd: true, isError: false, data: action.payload };
        case AppActions.ADD_PATIENT_FAILED:
            return { ...state, isProcessing: false, isAdd: false, isError: true, errorMessage: action.payload };
        case AppActions.GET_PATIENT:
            return { ...state, isProcessing: true, isAdd: false, isError: false };
        case AppActions.GET_PATIENT_SUCCESSFUL:
            return { ...state, isProcessing: false, isAdd: false, isError: false, data: action.payload };
        case AppActions.GET_PATIENT_FAILED:
            return { ...state, isProcessing: false, isAdd: false, isError: true, errorMessage: action.payload };
        default:
            return state;
    }
}

export default AuthReducer;