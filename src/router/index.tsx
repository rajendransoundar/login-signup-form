import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../Forms/login'
import SignUp from '../Forms/signup'

const Index = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Login/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Index
