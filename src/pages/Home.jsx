import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import TaskForm from '../components/TaskForm'
import { client } from '../supabase/client'
import TaskList from '../components/TaskList'

import { useTasks } from '../context/TaskContext'

const Home = () => {
  const navigate = useNavigate() // aunque sea un hook el contexto tiene que seguir presente en el App
  const { tasks } = useTasks()

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user }
      } = await client.auth.getUser()
      if (!user) navigate('/login')
    }
    getUser()
  }, [navigate])

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => client.auth.signOut()}>Log Out</button>
      <TaskForm />
      <TaskList />
    </div>
  )
}

export default Home
