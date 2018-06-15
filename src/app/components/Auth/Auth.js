import React from 'react';
import Modal from "../global/Modal";



export default class Auth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            login: "",
            isAuth: true,
            isOpen: false,
        }


    }
    toggleModal =() =>{
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    sendLogin =() => {
        console.log(this.state.email);
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]:  event.target.value
        });
    };

    render() {
        console.log(this.props);
        return (
            <div>
                {this.state.isAuth ?
                    <div><a href='/account'>Welcome, {this.state.login}</a> <a className='label label-primary' href='/logout'>Logout</a></div> :
                    <div>Welcome, Guest. Please, <a href='#' onClick={this.toggleModal}>Login</a> or <a href="/register">Register</a></div>}
                <Modal show={this.state.isOpen}
                       onClose={this.toggleModal}
                       modalTitle={"Login"}>
                    <div className="input-group login">
                        <input onChange={this.handleChange} type="email" name="email" className="form-control login__textField" placeholder="Email"/>
                        <input onChange={this.handleChange} type="password" name="password" className="form-control login__textField" placeholder="Password"/>
                        <div className="btn-group" role="group" aria-label="...">
                            <button onClick={this.sendLogin} type="button" id="login__button" className="btn btn-success">OK</button>
                        </div>
                    </div>

                </Modal>
            </div>
        )
    }

}
