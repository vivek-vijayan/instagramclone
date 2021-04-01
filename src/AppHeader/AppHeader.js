import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Avatar, makeStyles } from '@material-ui/core'
import './AppHeaderStyle.css'
import InstagramLogo from './static/Instagram_logo.png'
import HomeLogo from './static/homeLogo.png'
import HeartLogo from './static/heartLogo.png'
import SearchLogo from './static/searchLogo.png'
import ProfileLogo from './static/profileLogo.png'


const useStyle = makeStyles((theme) => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        fontSize: 11,
        backgroundColor: 'green'
    }
}))

export default function AppHeader() {
    const avatarStyle = useStyle()
 

    return (
        <div>
            <div className="container-fluid app-header positionFixed">
                <div className="row ">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 app-header-area">
                                <img src={InstagramLogo}
                                    alt="instagram"
                                    width="100px" />
                            </div>
                            <div className="col-sm-6 hide-mobile">
                                <form>
                                    <div className="SearchBox">
                                        <input className="SearchBoxInput" type="text" placeholder="Search"></input>
                                        <img className="SearchBoxLogo" src="https://www.freeiconspng.com/thumbs/search-icon-png/search-icon-png-18.png" alt="search" width="12px" />
                                    </div>
                                </form>
                            </div>
                            <div className="col-sm-3 hide-mobile">
                                <div className="row">
                                    <div className="col-sm-2 text-center"><img src={HomeLogo} alt="home"
                                        width="40px" /></div>
                                    <div className="col-sm-2 text-center"><img src={ProfileLogo} alt="heart"
                                        width="30px" /></div>
                                    <div className="col-sm-2 text-center"><img src={HeartLogo} alt="heart"
                                        width="30px" /></div>
                                    <div className="col-sm-2">
                                        <Avatar alt='Vivek Vijayan'
                                            className={
                                                avatarStyle.small
                                            }
                                            src="http://logo"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-use-UI-bottom-controls">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-3 text-center">
                                    <img src={HomeLogo} alt="home"
                                        width="40px" />
                                </div>
                                <div className="col-3 text-center"><img src={SearchLogo} alt="search"
                                    width="30px" /></div>
                                <div className="col-3 text-center"><img src={HeartLogo} alt="heart"
                                    width="30px" /></div>
                                <div className="col-3 text-center"><img src={ProfileLogo} alt="profile"
                                    width="30px" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
