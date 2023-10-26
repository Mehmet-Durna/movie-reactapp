import axios from 'axios';

const instance = axios.create({
    baseURL:'https://movie-app-api-atdx.onrender.com/api/v1',
    headers: {"ngrok-skip-browser-warning": "true"}
});


export default instance;
