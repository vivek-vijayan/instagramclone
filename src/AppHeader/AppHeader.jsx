import React from 'react'
import './app-header-style.css'
import userlogo from './static/user.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Overlay, OverlayTrigger, Popover} from 'react-bootstrap'

class AppHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchItem: ""
        }
    }
    getSearchItem(etarget) {
        this.setState({searchItem: etarget.target.value});
    }

    render() {
        return (
            <div className="container-fluid app-header">
                <div className="row">
                    <div className="col-sm-3 app-header-area">
                        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="instagram"/>
                    </div>
                    <div className="col-sm-4">
                        <form>
                            <div className="SearchBox">
                                <input value={
                                        this.state.searchItem
                                    }
                                    onChange
                                    ={  value => this.getSearchItem(value)}
                                    className="SearchBoxInput"
                                    type="text"
                                    placeholder="Search"></input>
                                <img className="SearchBoxLogo" src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-18.png" alt="search" width="12px"/>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-3 app-header-profile-area">
                        <img src={userlogo} className="profilepicture"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppHeader;
