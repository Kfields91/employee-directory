import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=100";


const API = {
    populateUsers: function() {
        return axios.get(BASEURL);
    }
};

export default API;