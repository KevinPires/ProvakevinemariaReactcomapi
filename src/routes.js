import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './pages/home'
import Corprimaria from './pages/corprimaria'
import Frequencia from './pages/frequencia'
import Ingresso from './pages/ingresso'
import MaiorNumero from './pages/maiorNumero'



export default function SiteRoute() {
    return (
     <BrowserRouter>
     <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/corprimaria' element={<Corprimaria />}/>
         <Route path='/frequencia' element={<Frequencia />}/>
         <Route path='/ingresso' element={<Ingresso />}/>
         <Route path='/maiorNumero' element={<MaiorNumero />}/>

     </Routes>
     </BrowserRouter>

    )
}