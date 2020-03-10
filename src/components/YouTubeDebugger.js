import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

    // constructor() {
    // super()

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    // changeBitrate = () => {
    //     this.setState({
    //         ...this.state,
    //         settings: {
    //             ...this.state.settings,
    //             bitrate: 12
    //         }
    //     })
    changeBitrate = () => {
        this.setState(prevState => {
            let state = { ...prevState }
            state.settings.bitrate = 12
            return state

        })
    }

    changeResolution = () => {
        this.setState(prevState => {
            let state = { ...prevState }
            state.settings.video.resolution = "720p"
            return state
        })
    }


    render() {
        return (
            <div>
                <button className="bitrate" onClick={() => this.changeBitrate()}>Change bitrate</button>
                <button className="resolution" onClick={() => this.changeResolution()} >change resolution</button>
            </div>
        )
    }
}