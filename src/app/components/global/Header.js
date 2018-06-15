import React from 'react';
import MainMenu from "./MainMenu";
import Search from "./Search";
import {Link} from "react-router";
import Auth from "../Auth/Auth";
import {connect} from "react-redux";
import {fetchCurrentUser} from '../../actions/authActions';

class Header extends React.Component {

    constructor(props){
        super(props);
        this.props.dispatch(fetchCurrentUser());
    }

    render() {
        return (
            <header className="header clearfix">
                { this.props.is_fetching ? null : <Auth authData={this.props.authData}/>}
                <MainMenu />
                <h3 className="text-muted mainTitle"><Link to='/'>React Blog</Link></h3>
                <Search/>
            </header>
        );
    }

}


function mapStateToProps(store) {


    return {

        authData: store.authData.authData,
        is_fetching: store.authData.is_fetching
    };
}

export default connect(mapStateToProps)(Header);