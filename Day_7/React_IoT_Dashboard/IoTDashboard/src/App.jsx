import { useState } from 'react'
import './App.css'
import EventsPage from './components/EventsPage'
import Apis from './components/Apis'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <div className='w-dvw h-dvh flex flex-col gap-2'>
      <EventsPage/>
      <Apis/>
      <Dashboard/>
    </div>
  )
}

export default App
