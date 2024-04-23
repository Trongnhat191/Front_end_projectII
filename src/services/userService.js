import axios from '../axios';

 const handleLoginApi = (email, password)=>{
    //goi den server nodejs
    //su dung package axios de gui den server
    return axios.post('/api/login',{email, password});
}

export {handleLoginApi}