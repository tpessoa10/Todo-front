import styles from './Tarefa.module.css'

export default function Tarefa(){
    return(
        <div className={styles.tarefa}>
            <h3>Titulo Tarefa</h3>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus suscipit assumenda eius voluptas architecto voluptatem nisi exercitationem unde esse, ut nobis, ullam doloribus 
                    velit, ratione nesciunt reiciendis voluptatibus rerum dolor
                </p>
            </div>
            <span>30/10/2000</span>
            <button className={styles.atualizar}>Atualizar</button>
            <button className={styles.deletar}>Apagar</button>
        </div>
    )
}