import React from 'react'
import { connect } from 'react-redux'
import { setVideo } from '../actions'

const Video = ({ video, title, thumbnail, setVideo }) => {

    const handleClick = () => {
        setVideo(video)
    }


    return(
        <div onClick={handleClick} className="ui divided items">
            <div className="item">
                <div className="ui tiny image">
                    <img src={thumbnail} />
                </div>
                <div className="middle aligned content">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default connect(null, { setVideo })(Video)