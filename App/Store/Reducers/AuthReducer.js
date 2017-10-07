import AuthActions from "./../Actions/AuthActions";

const INITIAL_STATE = {
    userAuth: {},
    isAuthenticated: false,
    isProcessing: false,
    isRegistered: false,
    isError: false,
    errorMessage: {}
}

function AuthReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AuthActions.SIGNUP:
            return { ...state, isProcessing: true, isRegistered: false, isError: false };
        case AuthActions.SIGNUP_SUCCESSFUL:
            return { ...state, isProcessing: false, isRegistered: true, isError: false };
        case AuthActions.SIGNUP_REJECTED:
            return { ...state, isProcessing: false, isRegistered: false, isError: true, errorMessage: action.payload };
        case AuthActions.SIGNIN:
            return { ...state, isProcessing: true, isRegistered: false, isError: false };
        case AuthActions.SIGNIN_SUCCESSFUL:
            return { ...state, isProcessing: false, isRegistered: true, isError: false };
        case AuthActions.SIGNIN_REJECTED:
            return { ...state, isProcessing: false, isRegistered: false, isError: true, errorMessage: action.payload };


        default:
           return state;
    }
}
export default AuthReducer;
