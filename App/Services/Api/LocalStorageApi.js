import LocalStorage from '../localStorage';
import { Observable } from "rxjs";
import AuthActions from '../../Store/Actions/AuthActions';
import { AsyncStorage } from 'react-native';

class LocalStorageApi extends LocalStorage {
    static signUp(payload) {
        return Observable.fromPromise(AsyncStorage.setItem('user', JSON.stringify(payload)))
            .switchMap(arr => {
                if (AsyncStorage.getItem('user')) {
                    let user = AsyncStorage.getItem('user')
                    return Observable.of({
                        type: AuthActions.SIGNUP_SUCCESSFUL,
                        payload: user
                    });
                }
                else {
                    return Observable.of({
                        type: AuthActions.SIGNUP_REJECTED,
                        payload: " Error Try Again "
                    });
                }
            })
    }
    static loginUser(payload) {
        return Observable.from(LocalStorage.loginUser(payload))
            .map(AuthActions.signinSuccessful)
            .catch(err => Observable.of({
                type: AuthActions.SIGNIN_REJECTED,
                payload: err
            }))
    }
}
export default LocalStorageApi;