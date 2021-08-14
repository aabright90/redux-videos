import React from 'react'
import { connect } from 'react-redux'

const VideoDisplay = ({ video }) => {
    
    if(!video) {
        return (
            <div className="spinner">
                <div className="ui active inverted dimmer">
                    <div className="ui text loader">Loading</div>
                </div>
            </div>
        )
    }

    return (
    <div className="video-container">
        <iframe  height="355" src={`https://www.youtube.com/embed/${video.id.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>{video.snippet.description}</p>
    </div>
    )

}

const mapStateToProps = (state) => {
    console.log(state.video);
    return {
        video: state.video
    }
}

export default connect(mapStateToProps)(VideoDisplay)