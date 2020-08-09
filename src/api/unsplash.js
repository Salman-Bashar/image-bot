import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID E1-KcOoJnrZFbdaEKJ4R-mycvGnz5AcQBA-q4aagy5E'
    }
});