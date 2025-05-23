import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

// Styles
import './App.css'

// Components
import NavBar from './components/NavBar/NavBar'

// Pages
import Landing from './pages/Landing/Landing'
import Dashboard from './pages/Dashboard/Dashboard'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'

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
      <Route path='/test' element={<h1>test</h1>} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<SignIn />} />
      { user 
        ? <Route path='/' element={<Dashboard />} />
        : <Route path='/' element={<Landing />} />
      }
    </Routes>
    </>
  )
}

export default App
