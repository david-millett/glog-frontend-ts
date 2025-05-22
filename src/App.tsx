import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// Styles
import './App.css'

// Components
import NavBar from './components/NavBar/NavBar'

// Pages


// Types
export type User = {
  name: string
  token: string
}

// App
function App() {

  const [user, setUser] = useState<User | null>(null)
  
  return (
    <>
    <NavBar user={user} setUser={setUser} />
    <Routes>
      <Route path='/' element={<h1>Home page!</h1>} />
      <Route path='/test' element={<h1>test</h1>} />
    </Routes>
    </>
  )
}

export default App
