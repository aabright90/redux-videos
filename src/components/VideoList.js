import React from 'react'
import { connect } from 'react-redux'
import Video from './Video'

class VideoList extends React.Component {

    renderVideos = () => {
        return this.props.videos.map(video => {
            return <Video
            video={video}
            key={video.id.videoId}
            title={video.snippet.title}
            thumbnail={video.snippet.thumbnails.high.url}
            />
        })
    }

    render(){
        return(
            <div>
                {this.renderVideos()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        videos: state.videos
    }
}

export default connect(mapStateToProps)(VideoList)