import youtube from '../apis/youtube'

export const setTerm = (term) => {
    return {
        type: 'SET_TERM',
        payload: term
    }
}

export const getVideos = (term) => async dispatch => {
    const response = await youtube.get('/search', {
        params: {
            q: term
        }
    })

    dispatch({ type: 'GET_VIDEOS', payload: response.data.items })
}

export const setVideo = (video) => {
    return {
        type: 'SET_VIDEO',
        payload: video
    }
}