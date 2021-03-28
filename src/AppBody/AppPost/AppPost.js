import React, { useEffect, useState } from 'react'
import './AppPostStyle.css'
import { Avatar, makeStyles } from '@material-ui/core'
import AppPostComments from './AppPostComment/AppPostComments'
import { firebaseInsta } from '../../FirebaseCenter/FirebaseInstagram.js'

import Heart from './static/like.png'
import WhiteHeart from './static/whiteheart.png'
import HeartRed from './static/like_red.png'
import Share from './static/share.png'
import Comment from './static/comment.png'
import SmileyFace from './static/SmileyFace.png'
import { useDoubleTap } from 'use-double-tap'
import moment, { parseTwoDigitYear } from 'moment'

var blankUsernameBackgroundColors = ['purple', 'red', 'green', 'orange']
var blankUsernameBackgroundColor = blankUsernameBackgroundColors[Math.floor(Math.random() * blankUsernameBackgroundColors.length)];

const usestyle = makeStyles((theme) => ({
    medium: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        backgroundColor: blankUsernameBackgroundColor,
        fontSize: 14
    }
}));

export default function AppPost({ postID, postUsername, postLikesCount, postMediaURL, postPublishedOn }) {

    // Realtime data collection 📮
    const FirebasePostRealTimeData = firebaseInsta.database();
    const FirebaseFirestore = firebaseInsta.firestore();

    // likes updator
    let likesCount = FirebasePostRealTimeData.ref(`post/${postID}/likesCount`);
    let comments = FirebaseFirestore.collection('InstagramPost').doc(postID);

    // states collections
    const classes = usestyle();
    const [newComment, setNewComment] = useState("")
    const [likes, setlikes] = useState(postLikesCount);
    const [commentsList, setcommentsList] = useState([])
    const [ILike, setILike] = useState(false)
    const [AnimeClass, setAnimeClass] = useState("")
    const [HeartPng, setHeartPng] = useState(Heart)
    const [PopUpHeartWhite, setPopUpHeartWhite] = useState("likePostWhiteHide")

    var LikesInformation = <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 5 }}>{likes} Likes</p>;
    
    function LikesStatusUpdater() {
        if (likes === 1) LikesInformation = <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 5 }}>{likes} Like</p>
        else if (likes > 1) LikesInformation = <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 5 }}>{likes} Likes</p>
        else LikesInformation = ""
    }

    const bind = useDoubleTap((event) => {
        LikeActionHandler()
    });

    useEffect(() => {
        // Like counter 🔄
        likesCount.on('value', snapshot => {
            setlikes(snapshot.val())
            LikesStatusUpdater()
        })

        comments.collection('commentsSection').onSnapshot((eachComments)=>{
            setcommentsList(eachComments.docs.map(doc => doc))
        })
    }, [])

    function AddLike() {
        setILike(true)
        setAnimeClass("likePost")
        setHeartPng(HeartRed)
        setPopUpHeartWhite("likePostWhite")
        LikesStatusUpdater()
        FirebasePostRealTimeData.ref(`post/${postID}`).child('likesCount').set(likes + 1)
    }
    function DisLike() {
        setILike(false)
        setAnimeClass("")
        setHeartPng(Heart)
        setPopUpHeartWhite("likePostWhiteHide")
        LikesStatusUpdater()
        FirebasePostRealTimeData.ref(`post/${postID}`).child('likesCount').set(likes - 1)
    }

    function LikeActionHandler() {
        ILike ? DisLike() : AddLike()
    }

    function PostComments(userID, comment) {
        var d = new Date()
        comments.collection('commentsSection').add({
            comments: comment,
            commentedBy: userID,
            postedOn: d.toDateString(),
            totalLikes : 0
        }).then((docref) => {
            console.log(`new comment added with the ID - ${docref.id}`)
        })
    }

    // Likes & comments status initiator 🧡
    LikesStatusUpdater()

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
                                            <Avatar src="//" alt={postUsername}
                                                className={
                                                    classes.medium
                                                }></Avatar>
                                        </td>
                                        <td className="col-sm-6 card-top-name postUserName">
                                            {postUsername} </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12"
                                style={
                                    { padding: 0 }
                                }>
                                <img src={postMediaURL} {...bind}
                                    width="100%"
                                    alt="post" />
                                <div class="centered">
                                    <img src={WhiteHeart} className={PopUpHeartWhite} alt="whiteheart" width="100px" />
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
                                    {LikesInformation}
                                </div>
                                <div style={{ marginBottom: 20}}>
                                    {
                                        commentsList.map(eachcom => {
                                            return (
                                                <AppPostComments commentID = {eachcom.id} commentedBy = {eachcom.data().commentedBy}
                                                    comment = {eachcom.data().comments}
                                                    postedOn = {eachcom.data().postedOn}
                                                    postID = {postID}
                                                    commentLikeCount = {eachcom.data().totalLikes}
                                                ></AppPostComments>
                                            )
                                        })
                                    }
                                </div>
                                <div className="row" style={{ paddingLeft: 10 }}>
                                    <p style={{ fontSize: 11, fontWeight: 500, color: 'gray', }}>
                                        {postPublishedOn}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Post a comment */}
                        <div className="row addComment">
                            <div className="col-1">
                                <img src={SmileyFace} alt="smileyFace" width="40px" style={{ paddingTop: "10px" }}></img>
                            </div>
                            <div className="col-9" >
                                <input className="addCommentInput" onChange={(e) => {
                                    setNewComment(e.target.value)
                                }} placeholder="Add a comment..."></input>
                            </div>
                            <div className="col-2">
                                <button className="PostButton" onClick={() => {
                                    PostComments('Vivek Vijayan 🔥', newComment)
                                }}>
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
