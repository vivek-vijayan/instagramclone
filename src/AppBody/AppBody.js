import React, { useEffect, useState } from 'react'
import AppPost from './AppPost/AppPost'
import AppPostLoading from './AppPost/AppPostLoading/AppPostLoading'
import AppSideBar from "./AppSideBar/AppSideBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import './AppBodyStyle.css'
import firebaseInsta from 'firebase'
// Firebase connectvity
const firebaseDB = firebaseInsta.firestore();

export default function AppBody(props) {
    const [instagramPost, setInstagramPost] = useState([])
    const [username, setUsername] = useState(props.username)
    // getting the post information from the server 🚀
    useEffect(() => {
        firebaseDB.collection('InstagramPost').onSnapshot(snapshot => {
            setInstagramPost(snapshot.docs.map(doc => doc))
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
                                        <AppPost postID = {item.id} postUsername={item.data().postUserName}
                                            postMediaURL={item.data().postMediaURL}
                                            postLikesCount = {item.data().postLikesCount}
                                            postPublishedOn={item.data().postPublishedOn}
                                            activeUsername={props.username}
                                            />
                                    </div>
                                )
                            })}
                            <AppPostLoading></AppPostLoading>
                    </div>
                    <div className="col-sm-4">
                        <AppSideBar username = {username}></AppSideBar>
                    </div>
                </div>
            </div>
        </div>
    )
}


