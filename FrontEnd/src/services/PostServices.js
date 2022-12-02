import axios from 'axios';

const BASE_URL = "http://localhost:9991/";

class PostService {
    getPost() {
        axios.get(BASE_URL);
    }
}

export default new PostService();