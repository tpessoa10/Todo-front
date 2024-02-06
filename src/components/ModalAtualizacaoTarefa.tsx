import { useState } from 'react'
import styles from './ModalAtualizacaoTarefa.module.css'
import api from '../api/api'

interface ModalAtualizacaoTarefaProps{
    id: number | undefined
    alterarEstado: (bool: boolean) => void
}

export default function ModalAtualizacaoTarefa({id, alterarEstado}:ModalAtualizacaoTarefaProps){
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

         const atualizacaoTarefa = {
            id: id,
            titulo: titulo,
            descricao: descricao
         }

         try{
            const response = await api.put('/tarefas', atualizacaoTarefa)
         }catch(error){
            console.log(error)
         }

         alterarEstado(false)
    }

    const onClick = () => {
        alterarEstado(false)
    }


    return(
        <div className={styles.container}>
            <button onClick={onClick} className={styles.botaoFechar}>X</button>
            <label htmlFor="titulo" className={styles.label}>Título</label>
            <input onChange={getTitulo} value={titulo} type="text" id="titulo" className={styles.input}/>
            <label htmlFor="descricao" className={styles.label}>Descrição</label>
            <textarea onChange={getDescricao} value={descricao} name="descricao" id="descricao"></textarea>
            <button className={styles.botao} onClick={onSubmit}>Atualizar</button>
        </div>
    )
}