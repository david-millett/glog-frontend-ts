// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

// * Components
import NavBar from './components/NavBar/NavBar'

// * Pages

function App() {
  
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={<h1>Home page!</h1>} />
      <Route path='/test' element={<h1>test</h1>} />
    </Routes>
    </>
  )
}

export default App
