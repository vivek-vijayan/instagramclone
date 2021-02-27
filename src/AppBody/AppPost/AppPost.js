import React, { useState } from 'react'
import './AppPostStyle.css'
import { Avatar, makeStyles } from '@material-ui/core'
import SamplePost from './static/SamplePostOr.jpg'

import Heart from './static/like.png'
import WhiteHeart from './static/whiteheart.png'
import HeartRed from './static/like_red.png'
import Share from './static/share.png'
import Comment from './static/comment.png'
import { useDoubleTap } from 'use-double-tap'



const usestyle = makeStyles((theme) => ({
    medium: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        backgroundColor: 'purple'
    }
}));


export default function AppPost() {

    const classes = usestyle();
    const [likes, setlikes] = useState(0);
    const [ILike, setILike] = useState(false)
    const [AnimeClass, setAnimeClass] = useState("")
    const [HeartPng, setHeartPng] = useState(Heart)
    const [PopUpHeartWhite, setPopUpHeartWhite] = useState("likePostWhiteHide")

    const bind = useDoubleTap((event) => {
        LikeActionHandler()
    });


    function AddLike() {
        setlikes(preLikes => preLikes + 1);
        setILike(true)
        setAnimeClass("likePost")
        setHeartPng(HeartRed)
        setPopUpHeartWhite("likePostWhite")
    }
    function DisLike() {
        setlikes(preLikes => preLikes - 1);
        setILike(false)
        setAnimeClass("")
        setHeartPng(Heart)
        setPopUpHeartWhite("likePostWhiteHide")
    }


    function LikeActionHandler() {
        ILike ? DisLike() : AddLike()
    }


    return (
        <div style={
            { marginBottom: 30 }
        }>
            <div className="container-fluid card">
                <div className="row">
                    <div className="container-fluid">
                        <div className="row card-top-info"
                            style={
                                { alignItems: 'center' }
                            }>
                            <div className="col-sm-12"
                                style={
                                    { marginLeft: 0 }
                                }>
                                <table>
                                    <tr>
                                        <td>
                                            <Avatar src="//" alt="User"
                                                className={
                                                    classes.medium
                                                }></Avatar>
                                        </td>
                                        <td className="col-sm-6 card-top-name postUserName">
                                            UserName Sample </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12"
                                style={
                                    { padding: 0 }
                                }>
                                
                                <img src={SamplePost} {...bind}
                                    width="100%"
                                    alt="post" />
                                    <div class="centered">
                                        <img src={WhiteHeart} className={PopUpHeartWhite} alt="whiteheart" width="100px"/>
                                    </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="container"
                                style={
                                    { marginLeft: 10 }
                                }>
                                <div className="row">
                                    <div className="col-sm-1"
                                        style={
                                            {
                                                padding: 10,
                                                width: 30
                                            }
                                        }>
                                        <img src={HeartPng}
                                            onClick={LikeActionHandler}
                                            className={AnimeClass}
                                            width="30px"
                                            alt="postlike_dislike"></img>
                                            
                                    </div>
                                    <div className="col-sm-1"
                                        style={
                                            {
                                                padding: 10,
                                                width: 30
                                            }
                                        }>
                                        <img src={Comment}
                                            width="25px"
                                            alt="comment" />
                                    </div>
                                    <div className="col-sm-1"
                                        style={
                                            {
                                                padding: 10,
                                                width: 10
                                            }
                                        }>
                                        <img src={Share}
                                            width="25px"
                                            alt="share" />
                                    </div>
                                </div>
                                <div className="row" style={{ paddingLeft: 10 }}>
                                    <p style={{ fontSize: 14, fontWeight: 600 }}>{likes} Likes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
