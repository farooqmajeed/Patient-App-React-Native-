import { AsyncStorage } from 'react-native';

export default class LocalStorage {
    static async setUser(userKey, userObj) {
        return await AsyncStorage.setItem(userKey, JSON.stringify(userObj));
    }
    static clearLocalStorage() {
        AsyncStorage.clear()
    }
    static loginUser(payload) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem('user').then(arr => {
                var data = JSON.parse(arr);
                if (data.email === payload.email && data.password === payload.password) {
                    resolve(data)
                }
                reject({ message: "Invalid Email and Password" })
            })
        })
    }
    static removeUser() {
        AsyncStorage.removeItem('localStorageUser');
    }

    static async getUser(userKey) {
        return await AsyncStorage.getItem(userKey);
    }
}