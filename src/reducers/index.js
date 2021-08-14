import { combineReducers } from 'redux'

const termReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_TERM':
            return action.payload;
        default:
            return state;
    }
}

const videosReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_VIDEOS':
            return action.payload   
        default:
            return state
    }
}

const videoReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_VIDEO':
            return action.payload   
        default:
            return state
    }
}

export default combineReducers({
    videos: videosReducer,
    term: termReducer,
    video: videoReducer
})