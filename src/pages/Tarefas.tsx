import { useNavigate } from "react-router-dom";
import Tarefa from "../components/Tarefa";
import PaginaBase from "../layout/PaginaBase";
import styles from './Tarefas.module.css'
import { useEffect, useState } from "react";
import api from "../api/api";
import ModalAtualizacaoTarefa from "../components/ModalAtualizacaoTarefa";

export default function Tarefas(){
    const navigate = useNavigate()
    const [tarefas, setTarefas] = useState<any[]>([])
    const [modalAberta, setModalAberta] = useState(false)
    const [idRecebido, setIdRecebido] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await api.get('/tarefas')
                setTarefas(response.data)
            }catch(erro){
                console.log(erro)
            }
        }
        fetchData()
    },[tarefas])

    const adicionarTarefa = () => {
        navigate('/adicionartarefa')
    }

    const receberId = (id:any) => {
        setIdRecebido(id)
        setModalAberta(true)
    }

    const receberEstado = (bool: boolean) => {
        setModalAberta(bool)
    }

    return (
        <>
            <h1>Tarefas</h1>
            <PaginaBase>
                {tarefas.map((tarefa) => (
                    <Tarefa tarefa={tarefa} enviarId={receberId} key={tarefa.id}/>
                    
                ))}
                {modalAberta && (
                    <div className={styles.divModal}>
                        <ModalAtualizacaoTarefa alterarEstado={receberEstado} id={idRecebido}/>
                    </div>
                )}
            </PaginaBase>
            <button className={styles.botao} onClick={adicionarTarefa}>Adicionar tarefa</button>
        </>
    )
}