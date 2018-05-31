import React from 'react';
import MainMenu from "./MainMenu";
import Search from "./Search";
import {Link} from "react-router";
import Auth from "../Auth/Auth";


export default class Header extends React.Component {

    render() {
        return (
            <header className="header clearfix">
                <Auth/>
                <MainMenu />
                <h3 className="text-muted mainTitle"><Link to='/'>React Blog</Link></h3>
                <Search/>
            </header>
        );
    }

}