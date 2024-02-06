import { useState } from 'react'
import styles from './PaginaAdicionarTarefa.module.css'
import api from '../api/api'
import { useNavigate } from 'react-router-dom'

export default function PaginaAdicionarTarefa(){
    const navigate = useNavigate()
    const [titulo, setTitulo] = useState()
    const [descricao, setDescricao] = useState()

    const getTitulo = (e:any) => {
       setTitulo(e.target.value)
    }

    const getDescricao = (e:any) => {
        setDescricao(e.target.value)
    }

    const onSubmit = async (e:any) => {
        e.preventDefault()

        const cadastroTitulo = {
            titulo: titulo,
            descricao: descricao
        }

        try{
            const response = await api.post('/tarefas', cadastroTitulo)
            console.log(response.data)
            navigate('/')
        } catch(error){
            console.log(error)
            console.log('teste')
        }
    }

    return (
        <div className={styles.container}>
            <label htmlFor="titulo" className={styles.label}>Título</label>
            <input onChange={getTitulo} value={titulo} type="text" id="titulo" className={styles.input}/>
            <label htmlFor="descricao" className={styles.label}>Descrição</label>
            <textarea onChange={getDescricao} value={descricao} name="descricao" id="descricao"></textarea>
            <button className={styles.botao} onClick={onSubmit}>Adicionar</button>
        </div>
    )
}