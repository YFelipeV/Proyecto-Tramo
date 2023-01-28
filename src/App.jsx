
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import {Route,Routes} from 'react-router-dom'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contactos' element={<Contact/>}/>
      </Routes>
    </>
    
  )
}

export default App
