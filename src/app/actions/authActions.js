import {LOGIN_USER} from "../constants/authConstants";
import AjaxRequest from "../services/AjaxRequest";

export function loginUser(userEmail, userPassword) {
    let url = '/auth/login';

    return{
        type: LOGIN_USER,
        payload: new AjaxRequest().send(url, null, {'email': userEmail, 'password': userPassword})
    }

}