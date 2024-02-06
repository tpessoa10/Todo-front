import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Tarefas from './pages/Tarefas'
import PaginaAdicionarTarefa from './pages/PaginaAdicionarTarefa'


export default function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route index path='/' element={<Tarefas/>}/>
                    <Route  path='/adicionartarefa' element={<PaginaAdicionarTarefa/>}/>
                </Route>
            </Routes>
        </Router>
    )
}