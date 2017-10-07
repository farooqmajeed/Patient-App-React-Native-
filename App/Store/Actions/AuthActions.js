export default class AuthActions {

    static SIGNUP            = 'SIGNUP';
    static SIGNUP_SUCCESSFUL = 'SIGNUP_SUCCESSFUL';
    static SIGNUP_REJECTED   = 'SIGNUP_REJECTED';

    static SIGNIN            = 'SIGNIN';
    static SIGNIN_SUCCESSFUL = 'SIGNIN_SUCCESSFUL';
    static SIGNIN_REJECTED   = 'SIGNIN_REJECTED';


    static signup(payload) {
        return {
            type: AuthActions.SIGNUP,
            payload: payload
        }
    }

    static signupupSuccessful(authUser) {
        return {
            type: AuthActions.SIGNUP_SUCCESSFUL,
            payload: authUser
        }
    }

    static signupRejected(error) {
        return {
            type: AuthActions.SIGNUP_REJECTED,
            payload: error
        }
    }


    static login(payload) {
        return {
            type: AuthActions.SIGNIN,
            payload: payload
        }
    }

    static signinSuccessful(authUser) {
        return {
            type: AuthActions.SIGNIN_SUCCESSFUL,
            payload: authUser
        }
    }

    static signinRejected(error) {
        return {
            type: AuthActions.SIGNIN_REJECTED,
            payload: error
        }
    }

    static logout() {
        return {
            type: AuthActions.LOGOUT
        }
    }

}