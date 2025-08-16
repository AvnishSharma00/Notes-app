
import './App.css'
import { NavBar } from './components/navbar'
import {Route,Routes} from 'react-router-dom'
import { Home } from './pages/Home'
import { Important } from './pages/Important'
import { Bin } from './pages/Bin'
import { Archive } from './pages/Archive'


function App() {

  return (
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/important' element={<Important/>}/>
  <Route path='/bin' element ={<Bin/>}/>
  <Route path='/archive'element={<Archive/>}/>

  </Routes>
  )
}

export default App
