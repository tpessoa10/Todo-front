import Tarefa from "../components/Tarefa";
import PaginaBase from "../layout/PaginaBase";

export default function Tarefas(){
    return (
        <>
            <h1>Tarefas</h1>
            <PaginaBase>
                <Tarefa/>
            </PaginaBase>
        </>
    )
}