import * as settings from './settings';
import axios from 'axios';

const host = settings.API_HOST;

class LoginApi {
  static postLoginAuthen(user) {
    const { Username, Password } = user;
    return new Promise((resolve, reject)=> {
      try {
        axios.post(`${host}/authenticate`,{Username, Password})
          .then(callback => {
            if (callback == 200){
              resolve(callback.data);
            }
          })
      }catch(error){
        console.log('postLoginAuthen error:', error);
      }
    });
  }
}

export default LoginApi;
