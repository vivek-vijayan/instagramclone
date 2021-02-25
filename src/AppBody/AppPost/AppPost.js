import React from 'react'
import './AppPostStyle.css'
import {Avatar, makeStyles} from '@material-ui/core'
import SamplePost from './static/SamplePost.png'

const usestyle = makeStyles((theme) => ({
    medium: {
        width:theme.spacing(5),
        height:theme.spacing(5),
        backgroundColor:'purple'
    }
}))

export default function AppPost() {
    const classes = usestyle()
    return (
        <div style={{marginBottom:30}}>
            <div className="container-fluid card">
                <div className="row">
                    <div className="container-fluid">
                        <div className="row card-top-info" style={{ alignItems:'center'}}>
                            <div className="col-sm-12">
                                <table>
                                    <tr>
                                        <td>
                                        <Avatar src="//" alt="User" className={classes.medium}></Avatar>
                                        </td>
                                        <td className="col-sm-6 card-top-name postUserName">
                                            UnniKrishnan 
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12" style={{padding:0}}>
                                <img src={SamplePost} width="100%" alt="post"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
