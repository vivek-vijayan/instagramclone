import React from 'react'
import './AppPostLoadingStyles.css'

export default function AppPostLoading() {
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
                                            <div className="avatar animated-background"></div>
                                        </td>
                                        <td className="col-sm-6 card-top-name postUserName ">
                                            <div className="text animated-background"></div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12"
                                style={
                                    { padding: 0 }
                                }>
                                <div className="images animated-background"></div>
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
                                        <div className="avatar-small animated-background"></div>

                                    </div>
                                    <div className="col-sm-1"
                                        style={
                                            {
                                                padding: 10,
                                                width: 30
                                            }
                                        }>
                                        <div className="avatar-small animated-background"></div>
                                    </div>
                                    <div className="col-sm-1"
                                        style={
                                            {
                                                padding: 10,
                                                width: 10
                                            }
                                        }>
                                        <div className="avatar-small animated-background"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
