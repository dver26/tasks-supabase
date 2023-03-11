import { Route, Routes, useNavigate } from 'react-router-dom'
import { client } from './supabase/client'
import { useEffect } from 'react'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import { TaskContextProvider } from './context/TaskContext'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    client.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/login')
      } else {
        navigate('/')
      }
    })
  }, [])

  return (
    <TaskContextProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </TaskContextProvider>
  )
}

export default App
