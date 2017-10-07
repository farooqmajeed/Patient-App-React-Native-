// import { Observable } from 'rxjs';
// import { ActionsObservable } from 'redux-observable';
// import AuthActions from '../Actions/AuthActions';
// import { AsyncStorage } from "react-native";
// import LocalStorageApi from '../../Services/Api/LocalStorageApi'

// export default class AuthEpic {
//     static signUpEpic = (action$) =>
//         action$.ofType(AuthActions.SIGNUP)
//             .debounceTime(1000)
//             .swtichMap(({ payload }) => {
//                 return LocalStorageApi.signUp(payload)
//             })


//     static loginEpic = (action$) =>
//         aciton$.ofType(AuthActions.SIGNIN)
//             .mergeMap(({ payload }) => {
//                 return LocalStorageApi.loginUser(payload)
//             })
// }
import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import AuthActions from '../Actions/AuthActions';
import { AsyncStorage } from "react-native";
import LocalStorageApi from '../../Services/Api/LocalStorageApi'
//** Epic Middlewares For Auth **//
export default class AuthEpic {

    // Epic middleware for login
    static loginEpic = (action$) =>
        action$.ofType(AuthActions.SIGNIN)
            .mergeMap(({ payload }) => {
                return LocalStorageApi.loginUser(payload)
               
            })


    //Epic middleware for signup
    static signupEpic = (action$) =>
        action$.ofType(AuthActions.SIGNUP)
            .debounceTime(1000)
            .switchMap(({ payload }) => {
                return LocalStorageApi.signUp(payload)
            })
}