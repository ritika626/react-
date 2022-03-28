import axios from 'axios'

const axiosInstance=axios.create({
    baseURL:process.env.REACT_APP_BASE_URL_TEST,
})

axiosInstance.interceptors.request.use((config)=>{
    const token=localStorage.getItem('token')
    config.headers['Authorization']=`Bearer ${token}`;
    return config
});

export default axiosInstance;