import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { client } from '../supabase/client'

const Home = () => {
  const navigate = useNavigate()
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
    </div>
  )
}

export default Home
