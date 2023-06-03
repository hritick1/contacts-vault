import axios from "axios";
axios.defaults.baseURL="https://course-app.onrender.com";
axios.defaults.withCredentials = true;
axios.interceptors.response.use(res=>res,async err=>{
    if(err.response.status==400){
        const response=await axios.get('/refresh');

        if(response.status==200){
            console.log(response);
            axios.defaults.headers.common['Authorization']='Bearer '+response.data.accessToken;
            sessionStorage.setItem("isLoggedIn", "true");
            return axios(err.config);
        }
    }
    return err;
});