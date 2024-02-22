import { BrowserRouter as Router, Route, Routes, redirect, Navigate, useNavigate } from 'react-router-dom'
import Layout from './layout/Layout'
import Tarefas from './pages/Tarefas'
import PaginaAdicionarTarefa from './pages/PaginaAdicionarTarefa'
import PaginaLogin from './pages/PaginaLogin'
import PaginaCadastro from './pages/PaginaCadastro'


export default function AppRoutes(){
    const token = sessionStorage.getItem('token')
    const navigate = useNavigate

    

    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route index path='/' element={token ? <Tarefas/> : (<Navigate to="/login"/>)}/>
                    <Route  path='/adicionartarefa' element={token ? <PaginaAdicionarTarefa/> : (<Navigate to="/login"/>)}/>
                    <Route path='/login' element={!token ? <PaginaLogin/> : (<Navigate to="/"/>)}/>
                    <Route path='/cadastro' element={!token ? <PaginaCadastro/> : (<Navigate to="/"/>)}/>*
                </Route>
            </Routes>
        </Router>
    )
}

{/*<Route index path='/' element={token ? <Tarefas/> : (<Navigate to="/login"/>)}/>
<Route  path='/adicionartarefa' element={token ? <PaginaAdicionarTarefa/> : (<Navigate to="/login"/>)}/>
<Route path='/login' element={!token ? <PaginaLogin/> : (<Navigate to="/"/>)}/>
<Route path='/cadastro' element={!token ? <PaginaCadastro/> : (<Navigate to="/"/>)}/>*/}