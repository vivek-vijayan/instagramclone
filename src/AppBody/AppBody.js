import React, { useEffect, useState } from 'react'
import AppPost from './AppPost/AppPost'
import AppSideBar from "./AppSideBar/AppSideBar";
import 'bootstrap/dist/css/bootstrap.min.css'
import './AppBodyStyle.css'
import FirebaseInstagramConnectivity from '../FirebaseCenter/FirebaseInstagram.js'

// Firebase connectvity
const firebaseDB = FirebaseInstagramConnectivity.firestore();
const userProfileID = "vivek"

export default function AppBody() {
    const [instagramPost, setInstagramPost] = useState({
        postID: 0,
        postUserName: "Vivek Vijayan",
        postMediaURL: items[item].mediaURL ? items[item].mediaURL : "No data",
        postTotallikes: items[item].totalLikes ? items[item].totalLikes : "No data",
        postTotalComments: items[item].totalComments ? items[item].totalComments : "No data",
    })

    // dbReference.on('value', (snapshot) => {
    //     let items = snapshot.val();
    //     for (let item in items) {
    //         instagramPost.push({
    //             postID: item,
    //             postUserName: items[item].username ? items[item].username : "No data",
    //             postMediaURL: items[item].mediaURL ? items[item].mediaURL : "No data",
    //             postTotallikes: items[item].totalLikes ? items[item].totalLikes : "No data",
    //             postTotalComments: items[item].totalComments ? items[item].totalComments : "No data",
    //         })
    //     }
    // });
    useEffect(() => {
        firebaseDB.collection('post').onSnapshot(snapshot => {

        })
    }, [])
    return (
        <div className="frame">
            <div className="container-fluid" >
                <div className="row">
                    <div className="col-sm-6">
                        {instagramPost.map((item) => {
                            return (
                                <div>
                                    <p>Hello world</p>
                                </div>
                            )
                        })}
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


