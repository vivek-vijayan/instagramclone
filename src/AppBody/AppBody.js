import React, { useEffect, useState } from 'react'
import AppPost from './AppPost/AppPost'
import AppSideBar from "./AppSideBar/AppSideBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import './AppBodyStyle.css'
import {firebaseInsta} from '../FirebaseCenter/FirebaseInstagram.js'
import moment from 'moment'

// Firebase connectvity
const firebaseDB = firebaseInsta.firestore();
const userProfileID = "post"

export default function AppBody() {
    const [instagramPost, setInstagramPost] = useState([])

    // getting the post information from the server 🚀
    useEffect(() => {
        firebaseDB.collection('InstagramPost').onSnapshot(snapshot => {
            setInstagramPost(snapshot.docs.map(doc => doc.data()))
        })  
    });

    return (
        <div className="frame">
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-sm-6">
                        {
                            instagramPost.map(item => {
                                return (
                                    <div>
                                        <AppPost postUsername={item.postUserName}
                                            postMediaURL={item.postMediaURL}
                                            postTotalLikes={item.postTotallikes}
                                            postUploadedTimeStamp={item.postUploadedTimeStamp} />
                                    </div>
                                )
                            })}
                    </div>
                    <div className="col-sm-4">
                        <AppSideBar></AppSideBar>
                    </div>
                </div>
            </div>
        </div>
    )
}


