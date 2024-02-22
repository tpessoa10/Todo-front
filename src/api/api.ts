import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:8080",
    headers:{
        Accept: 'application/json',
        Content: 'application/json'
    }
})

api.interceptors.request.use(function(config){
    const token = sessionStorage.getItem('token')
    if(token && config.headers){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, function(erro){
    console.log('Erro no interceptador do axios')
    return Promise.reject(erro)
})

export default api