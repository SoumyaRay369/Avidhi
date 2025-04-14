import { Home } from './components/Home'
import { About } from './components/About'
import {Signup} from './components/Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {


  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/About' element={<About></About>}></Route>
          <Route path='/Signup' element={<Signup></Signup>}></Route>
        </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
