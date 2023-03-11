import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { client } from '../supabase/client'

const Login = () => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await client.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: 'http://localhost:5173/'
        }
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    async function getUser() {
      const {
        data: { user }
      } = await client.auth.getUser()
      if (user) navigate('/')
    }
    getUser()
  }, [])

  return (
    <div className='App'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='email'
          name='email'
          id=''
          placeholder='youremail@site.coim'
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  )
}

export default Login
