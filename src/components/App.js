import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDisplay from './VideoDisplay'
import { connect } from 'react-redux'
import { getVideos, setVideo } from '../actions'

class App extends React.Component {

    componentDidMount(){
        this.props.getVideos('snowboarding')    
    }

    componentDidUpdate(){
        this.props.setVideo(this.props.videos[0])
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar/>
                <div className="ui grid">
                    <div className="ten wide column">
                        <VideoDisplay/>
                    </div>
                    <div className="six wide column">
                        <VideoList/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        videos: state.videos
    }
}

export default connect(mapStateToProps, { getVideos, setVideo })(App)