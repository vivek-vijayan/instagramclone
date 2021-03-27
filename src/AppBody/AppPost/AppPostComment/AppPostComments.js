import { makeStyles } from '@material-ui/core'
import React, { Component } from 'react'
import "./AppPostComments.css";
import HeartRed from '../static/like_red.png'
import Heart from '../static/like.png'
import { useDoubleTap } from 'use-double-tap'
import { useState } from 'react';


export default function AppPostComments(props) {
    var commentedBy = props.commentedBy;
    var comment = props.comment;
    var postedOn = props.postedOn;

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
                    <div className="col-11">
                        <span style={{ fontWeight: 700, paddingRight: 10 }}>{commentedBy}</span>
                        <span>{comment}</span>
                        
                    </div>
                    <div className="col-1" style={{ position: 'absolute', right: 10 }}>
                        <img src={HeartPng} style={{ marginLeft: 10, }} className={AnimeClass} alt="whiteheart" width="15px" />
                    </div>
                    {/* <div style={{ paddingLeft: 20 }}>
                        inner reply. need to practice more on this keyboard                        
                    </div> */}
                </div>
            </div>
        </div>
    )
};