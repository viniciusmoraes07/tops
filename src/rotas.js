import Login from "./componentes/pages/login"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Teste from "./componentes/pages/teste/teste";

export default function Rotas(){

    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Login/>} />
                <Route exact path='/rota' element={<Teste/>} />
            </Routes>
        </Router>
    )
}

