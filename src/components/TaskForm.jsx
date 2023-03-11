import React, { useState } from 'react'
import { client } from '../supabase/client'

const TaskForm = () => {
  const [taskName, setTaskName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(taskName)
    try {
      const {
        data: {
          user: { id }
        }
      } = await client.auth.getUser()
      const result = await client.from('tasks').insert({
        name: taskName,
        userId: id
      })
      console.log(result)
    } catch (error) {
      console.log('error')
    }
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          name='taskName'
          placeholder='Write a task name'
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button>Añadir</button>
      </form>
    </div>
  )
}

export default TaskForm
