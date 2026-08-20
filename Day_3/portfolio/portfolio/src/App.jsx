import { useState } from 'react';
import { Hero, About, Contact} from './pages';
import {NavBar, } from './Components';
import  Layout from './layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router';


function App() {

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" index element={<Hero/>} />
        <Route path="/about" element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Route>
    </Routes>
  )
}

export default App
