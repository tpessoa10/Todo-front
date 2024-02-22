import { useState } from 'react'
import styles from './PaginaLogin.module.css'
import api from '../api/api'
import { useNavigate } from 'react-router-dom'

export default function PaginaLogin(){
    const [usuario, setUsuario] = useState()
    const [senha, setSenha] = useState()
    const navigate = useNavigate()

    const getUsuario = (e:any) => {
        setUsuario(e.target.value)
    }

    const getSenha = (e:any) => {
        setSenha(e.target.value)
    }

    const onSubmit = async (e:any) => {
        console.log('teste')
        e.preventDefault()

        const cadastroUsuario = {
            login: usuario,
            senha: senha
        }

        console.log(cadastroUsuario)

        try{
            const response = await api.post('/login', cadastroUsuario)
            sessionStorage.setItem('token', response.data.token)
            console.log(response.data)
            console.log('nav')
            window.location.reload()
        }
        catch(erro){
            console.log(erro)
        }
    }

    return(
        <div className={styles.container}>
            <h3>Fazer Login</h3>
            <label htmlFor="usuario">Usuário</label>
            <input onChange={getUsuario} value={usuario} type="text" id="usuario" />
            <label htmlFor="senha">Senha</label>
            <input onChange={getSenha} value={senha} type="password" id="senha"/>
            <button onClick={onSubmit}>Fazer Login</button>
            <a href="">Criar conta</a>
        </div>
    )
}