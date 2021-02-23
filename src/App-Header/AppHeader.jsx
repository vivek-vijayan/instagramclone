import React, {Component} from 'react'
import './app-header-style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class AppHeader extends React.Component {
    constructor(){
        super();
        var searchText;
    }
    render() {
        return (
            <div className="container-fluid app-header">
                <div className="row">
                    <div className="col-sm-3 app-header-area">
                        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"/>
                    </div>
                    <div className="col-sm-3">
                        <form>
                            <div className="SearchBox">
                                <input className="SearchBoxInput" type="text" placeholder="Search"></input>
                                <img className="SearchBoxLogo" src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-18.png" width="12px"/>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-3">
                        <button className="loginButton">Login</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppHeader;
