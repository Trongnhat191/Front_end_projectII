import axios from '../axios';

 const handleLoginApi = (email, password)=>{
    //goi den server nodejs
    //su dung package axios de gui den server
    return axios.post('/api/login',{email, password});
}

const getAllUsers = (inputId) =>{
    return axios.get(`/api/get-all-users?id=${inputId}`)
}

const createNewUserService =(data)=>{
    console.log('check data from service: ', data);
    return axios.post('/api/create-new-user', data);
}

const deleteUserService =(userId)=>{
    return axios.delete('/api/delete-user',{
        data:{
            id: userId
        }})
}

const editUserService = (inputData) =>{
    return axios.put('/api/edit-user',inputData)
}

const getAllCodeService = (inputType) =>{
    return axios.get(`/api/allcode?type=${inputType}`)
}
export {handleLoginApi,
    getAllUsers,
    createNewUserService,
    deleteUserService,
    editUserService,
    getAllCodeService}