import React from 'react'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Manager from '../pages/Manager/Manager'
import Services from '../pages/Services'
import { Routes, Route } from 'react-router-dom'

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/home' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='Services' element={<Services />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='manager' element={<Manager />} />
        </Routes >


    )
}

export default Routers