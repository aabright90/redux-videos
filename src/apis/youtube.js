import axios from 'axios'

const KEY = 'AIzaSyAZqfFffbSFEfWzFMgxz7tptgCdBg_ZY_U'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})