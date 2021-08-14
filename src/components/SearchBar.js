import React from 'react'
import { connect } from 'react-redux'
import { setTerm, getVideos } from '../actions'

class SearchBar extends React.Component {


    handleChange = (event) => {
        this.props.setTerm(event.target.value)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.getVideos(this.props.term)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="ui form">
                    <div className="field">
                        <div className="ui massive icon input">
                            <input onChange={this.handleChange} />
                            <i className="search icon"></i>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        term: state.term
    }
}

export default connect(mapStateToProps, { setTerm, getVideos })(SearchBar)