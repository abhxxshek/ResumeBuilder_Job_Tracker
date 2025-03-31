import axios from "axios";

const axiosInstance=axios.create({
    baseURL:'https://resumebuilder-job-tracker-backend.onrender.com'
})

axiosInstance.interceptors.request.use((config)=>{
    const accessToken=sessionStorage.getItem('userInfo');
    if(accessToken){
        if(config){
            config.headers.token=accessToken;
        }
    } 
    return config;
},(error)=>{
    return Promise.reject(error);
})

export default axiosInstance