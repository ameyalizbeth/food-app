import axios from 'axios';
export default axios.create({
    baseURL:"https://developers.zomato.com/api/v2.1",
    headers:{

    'user-key':"95ec4d8c41b95b6d64194b3d6dfa99bf"
    }

});
