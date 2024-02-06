import api from '../api/api'
import styles from './Tarefa.module.css'

interface tarefa{
    id: number,
    titulo: string,
    descricao: string,
    data:string
}

interface TarefaProps{
    tarefa:tarefa
    enviarId:(n: number) => void
}

export default function Tarefa({tarefa, enviarId}:TarefaProps){

    const handleClick = () => {
        enviarId(tarefa.id)
    }

    const handleDeletarTarefa = (id:number) => {
        api.delete(`/tarefas/${id}`)
        .then((response) => {
            console.log(response.data)
        })
        .catch((erro) => {
            console.log(erro)
        })
    }

    return(
        <div className={styles.tarefa}>
            <h3>{tarefa.titulo}</h3>
            <div>
                <p>{tarefa.descricao}</p>
            </div>
            <span>{tarefa.data}</span>
            <button className={styles.atualizar} onClick={handleClick}>Atualizar</button>
            <button className={styles.deletar} onClick={() => handleDeletarTarefa(tarefa.id)} id={tarefa.id.toString()}>Apagar</button>
        </div>
    )
}