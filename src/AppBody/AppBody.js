import React from 'react'
import AppPost from './AppPost/AppPost'
import AppSideBar from "./AppSideBar/AppSideBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import './AppBodyStyle.css'

export default function AppBody() {
    return (
        <div className="frame">
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-sm-6">
                        <AppPost></AppPost>
                        <AppPost></AppPost>
                        <AppPost></AppPost>
                        <AppPost></AppPost>
                        <AppPost></AppPost>
                        <AppPost></AppPost>
                    </div>
                    <div className="col-sm-4">
                        <AppSideBar></AppSideBar>
                    </div>
                </div>
            </div>
        </div>
    )
}
