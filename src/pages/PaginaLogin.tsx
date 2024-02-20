import styles from './PaginaLogin.module.css'

export default function PaginaLogin(){
    return(
        <div className={styles.container}>
            <h3>Fazer Login</h3>
            <label htmlFor="usuario">Usuário</label>
            <input type="text" id="usuario" />
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha"/>
            <button>Fazer Login</button>
            <a href="">Criar conta</a>
        </div>
    )
}