import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Tarefas from './pages/Tarefas'
import PaginaAdicionarTarefa from './pages/PaginaAdicionarTarefa'
import PaginaLogin from './pages/PaginaLogin'
import PaginaCadastro from './pages/PaginaCadastro'


export default function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path='/login' element={<PaginaLogin/>}/>
                    <Route path='/cadastro' element={<PaginaCadastro/>}/>
                    <Route index path='/' element={<Tarefas/>}/>
                    <Route  path='/adicionartarefa' element={<PaginaAdicionarTarefa/>}/>
                </Route>
            </Routes>
        </Router>
    )
}