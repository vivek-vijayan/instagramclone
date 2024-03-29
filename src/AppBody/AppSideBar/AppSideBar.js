import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Avatar, makeStyles } from '@material-ui/core'
import './AppSideBarStyle.css'

const useStyle = makeStyles((theme) => ({
    big: {
        width: theme.spacing(6),
        height: theme.spacing(6),
        backgroundColor: 'green',
        fontSize: 15
    }
}))

export default function AppSideBar(props) {
    const classes = useStyle()

    // Getting the props
    const username = props.username;
    const profilepicture = props.profilepicture;
    const logout = props.logout.bind();

    return (
        <div style={{ position: 'fixed' }}>
            <div className="container-fluid"
                style={
                    { marginTop: 20, width: 300 }
                }>
                <div className="row">
                    <div className="container-fluid">
                        <div className="row"
                            style={
                                {
                                    fontSize: 14,
                                    alignItems: 'center'
                                }}>
                            <div className="col-sm-2">
                                <Avatar className={
                                    classes.big
                                }
                                    alt={username}
                                    src={profilepicture}></Avatar>
                            </div>

                            <div className="col-sm-8">
                                <div className="container-fluid">
                                    <div className="row"
                                        style={
                                            { marginTop: 15 }
                                        }>
                                        <div className="col-sm-12">
                                            <b style={
                                                { fontSize: 14 }
                                            }>{username}</b>
                                        </div>
                                        <div className="col-sm-12">
                                            <p style={
                                                { fontSize: 14 }
                                            }>Vivek Vijayan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-2 link" onClick={logout}>
                                Logout
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { /* Follow suggestion  part  */}

            { /* Follow suggestion  end  */}
            { /* Credit part  */}
            <div className="container">
                <div className="row" style={{ paddingLeft: 40 }}>
                    <div className="col-sm-12 credits">
                        <b>Instagram Clone</b> 🧬 developed by Vivek Vijayan © 2021
                        <br></br>
                        Follow me on <a href="//">Instagram</a> | <a href="//">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
