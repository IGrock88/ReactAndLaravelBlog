import React from 'react';
import {Link} from 'react-router';
import UserAdminOptions from "./UserAdminOptions";

export default class UserItem extends React.Component {

    constructor(props) {
        super(props);
        this.userRole = 'admin';
    }

    render() {

        return (
            <div className="thumbnail" >
                <div className="caption">
                    <h3>Login: {this.props.user.name}</h3>
                    <p>Full name: {this.props.user.login}</p>
                    <div>
                        <Link to="/us" className="btn btn-primary" role="button">Profile</Link>

                        <UserAdminOptions user={this.props.user}
                                          userRole={this.userRole}/>
                    </div>
                </div>
            </div>
        );
    }
}