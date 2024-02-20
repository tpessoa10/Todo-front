import styles from './PaginaLogin.module.css'

export default function PaginaCadastro(){
    return(
        <div className={styles.container}>
            <h3>Fazer Cadastro</h3>
            <label htmlFor="usuario">Usuário</label>
            <input type="text" id="usuario" />
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha"/>
            <button>Fazer Cadastro</button>
            <a href="">Entrar na conta</a>
        </div>
    )
}