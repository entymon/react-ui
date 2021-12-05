import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:3146/api/harvard-art-museum',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
});