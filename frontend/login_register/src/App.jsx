
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import LoginRegister from './LoginRegister'
import Home from './Home'

function App() {

  return (
    <div className='flex flex-col font-serif items-center justify-center '>
      <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<LoginRegister/>}/> */}
        {/* <Route path='/register' element={<LoginRegister/>}/> */}
        <Route path='/Home' element={<Home/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/login-register" element={<LoginRegister />} />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
