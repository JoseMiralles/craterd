import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-craterd-cd6c8.cloudfunctions.net/api",
    //baseURL: "http://localhost:5001/craterd-cd6c8/us-central1/api"
});

export default instance;