import * as AuthConstants from '../constants/authConstants';
import * as BlogsConstants from "../constants/blogsConstants";
export function authReducer(state = {authData: [], is_fetching: false}, action) {
    switch (action.type){
        case AuthConstants.LOGIN_USER_PENDING: {
            state = {state, is_fetching: true};
            break;
        }
        case BlogsConstants.FETCH_BLOGS_FULFILLED: {
            state = {state, is_fetching: false, authData: action.payload.data};
            break;
        }

        case BlogsConstants.FETCH_BLOGS_REJECTED: {
            state = {state, is_fetching: false, error_message: action.payload.message};
            break;
        }
    }
    return state;
}