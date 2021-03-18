import { makeStyles } from '@material-ui/core'
import React, { Component } from 'react'
import "./AppPostComments.css";
import AppPostCommentReply from "./AppPostCommentReply/AppPostCommentReply";
import HeartRed from '../static/like_red.png'
import Heart from '../static/like.png'
import { useDoubleTap } from 'use-double-tap'
import { useState } from 'react';

export default function AppPostComments(props) {
    //var username = props.username;
    //var comments = props.comments;
    //var like = props.like;

    var username = "rocket raja 🚀"
    var comment = " Picture looks great"

    const [likes, setlikes] = useState(0);
    const [ILike, setILike] = useState(false)
    const [AnimeClass, setAnimeClass] = useState("")
    const [HeartPng, setHeartPng] = useState(Heart)

    const bind = useDoubleTap((event) => {
        LikeActionHandler()
    });

    function AddLike() {
        setlikes(preLikes => preLikes + 1);
        setILike(true)
        setAnimeClass("likePost")
        setHeartPng(HeartRed)
    }
    function DisLike() {
        setlikes(preLikes => preLikes - 1);
        setILike(false)
        setAnimeClass("")
        setHeartPng(Heart)
    }

    function LikeActionHandler() {
        ILike ? DisLike() : AddLike()
    }

    return (
        <div {...bind}>
            <div className="comments" style={{ fontSize: 14 }}>
                <div className="row" style={{ paddingLeft: 10 }}>
                    <div className="col-sm-11">
                        <span style={{ fontWeight: 700, paddingRight:10 }}>{username}</span>
                        <span>{comment}</span>
                        <span style={{ fontSize: 10, color: 'gray', paddingLeft: 10, fontWeight: 500 }}>20 min ago</span>
                    </div>
                    <div className="col-sm-1" style={{position:'absolute', right: 10}}>
                        <img src={HeartPng} style={{ marginLeft: 10, }} className={AnimeClass} alt="whiteheart" width="15px" />
                    </div>
                    <div style={{ paddingLeft: 20 }}>
                        <AppPostCommentReply></AppPostCommentReply>
                    </div>
                </div>
            </div>
        </div>
    )
};