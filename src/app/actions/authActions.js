import {FETCH_CURRENT_USER} from "../constants/authConstants";
import AjaxRequest from "../services/AjaxRequest";

// export function loginUser(userEmail, userPassword) {
//     let url = '/auth/login';
//
//     return{
//         type: LOGIN_USER,
//         payload: new AjaxRequest().send(url, null, {'email': userEmail, 'password': userPassword})
//     }
//
// }

export function fetchCurrentUser() {
    let  url = '/auth/currentuser';

    return {
        type: FETCH_CURRENT_USER,
        payload: new AjaxRequest().send(url)
    }

}