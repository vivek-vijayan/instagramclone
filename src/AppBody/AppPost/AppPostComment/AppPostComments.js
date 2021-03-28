import React, { useEffect } from 'react'
import "./AppPostComments.css";
import HeartRed from '../static/like_red.png'
import Heart from '../static/like.png'
import { useDoubleTap } from 'use-double-tap'
import { useState } from 'react';
import { firebaseInsta } from '../../../FirebaseCenter/FirebaseInstagram.js'


export default function AppPostComments(props) {
    var commentedBy = props.commentedBy;
    var comment = props.comment;
    var postedOn = props.postedOn;
    var commentID = props.commentID;
    var postID = props.postID;
    var commentLikeCount = props.commentLikeCount;

    const FirebaseCommentSection = firebaseInsta.firestore().collection('InstagramPost').doc(postID).collection('commentsSection').doc(commentID)

    const [likes, setlikes] = useState(commentLikeCount);
    const [ILike, setILike] = useState(false)
    const [AnimeClass, setAnimeClass] = useState("")
    const [HeartPng, setHeartPng] = useState(Heart)

    const bind = useDoubleTap((event) => {
        LikeActionHandler()
    });

    useEffect(() => {
        FirebaseCommentSection.onSnapshot((snapshotCommentsLikes) => {
            setlikes(snapshotCommentsLikes.data().totalLikes)
        })
    }, [])

    function AddLike() {
        setILike(true)
        setAnimeClass("likePost")
        setHeartPng(HeartRed)
        FirebaseCommentSection.update({ totalLikes: likes + 1 }).then(() => {
        })
    }
    function DisLike() {
        setILike(false)
        setAnimeClass("")
        setHeartPng(Heart)
        FirebaseCommentSection.update({ totalLikes: likes - 1 }).then(() => {
        })
    }

    function LikeActionHandler() {
        ILike ? DisLike() : AddLike()
    }

    return (
        <div {...bind} className="row" style={{ fontSize: 14 }}>
            <div className="col-sm-11">
                <span style={{ fontWeight: 700, paddingRight: 10 }}>{commentedBy}</span>
                <span>{comment}</span>
                <span style={{ fontSize: 11, color: 'grey', paddingLeft: 10 }}>{postedOn}</span>
                <span style={{ color: 'grey', fontSize: 10, paddingLeft: 10 }}>{likes} Like</span>
            </div>
            <div className="col-sm-1">
                <img style={{ position: 'related', right: 0 }} src={HeartPng} style={{ marginLeft: 10, }} className={AnimeClass} alt="whiteheart" width="15px" />
            </div>
        </div>
    )
};