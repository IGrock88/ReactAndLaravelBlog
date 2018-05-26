import React from 'react';
import AjaxRequest from "../../services/AjaxRequest";


export default class Auth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: "Guest",
            isAuth: false
        }
    }

    sendLogin =() => {
        let test = new AjaxRequest().send('/auth/login', null, {email: 'igrock88@gmail.com', password: 'qwerty'});
        console.log(test.data);
    };

    render() {
        return (
            <div>
                {this.state.isAuth ?
                    <div><a href='/account'>Welcome, {this.state.login}</a> <a className='label label-primary' href='/logout'>Logout</a></div> :
                    <div>Welcome, Guest. Please, <a href="/login">Login</a> or <a href="/register">Register</a></div>}
            </div>
        )
    }

}