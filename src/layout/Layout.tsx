import { Outlet } from "react-router-dom";
import styles from './Layout.module.css'

export default function Layout(){
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <Outlet></Outlet>
            </div>
        </div>
    )
}