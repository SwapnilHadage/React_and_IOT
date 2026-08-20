import { useState } from 'react'
import './App.css'
import { Routes, Route, } from 'react-router'
import toast from 'react-hot-toast'
import {Login, Registration, Home, Welcome, } from './pages'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Welcome/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Registration/>} />
      <Route path='/home' element={<Home/>} />
    </Routes>
    </>
  )
}

export default App
