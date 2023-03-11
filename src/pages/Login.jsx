import React, { useState } from 'react'
import { client } from '../supabase/client'

const Login = () => {
  const [email, setEmail] = useState('')

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
