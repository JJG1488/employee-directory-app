import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API



const API = {

    getUsers: count => {

        return axios.get(`https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`)

    }

}

export default API;