import styles from './PaginaBase.module.css'

interface PaginaBaseProps{
    children:React.ReactNode
}

export default function PaginaBase({children}:PaginaBaseProps){
    return (
        <div className={styles.containerP}>
            <div className={styles.container}>{children}</div>
        </div>
    )
}