import React, { useState } from 'react'
import TaskList from './Components/TaskList';
import { Input } from 'antd';
import { Divider } from 'antd';
import { Context } from './context';

export default function App() {

  const [tasks, setTasks] = useState([
    {id: 1, title: 'First task', completed: false},
    {id: 2, title: 'Second task', completed: false},
  ])

  const [taskTitle, setTitle] = useState('')

  const addTask = e => {
    if(e.key === 'Enter'){
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: taskTitle,
          completed: false
        }
      ])  
      setTitle('')
    }
  }

  const deleteTask = id => {
    setTasks(tasks.filter(item => {
      return item.id !== id
    }))
  }

  const editTask = id => {
    setTasks(tasks.map(item => {
      if(item.id === id){
        item.completed = !item.completed
      }
      return item
    }))
  }

  return (
    <Context.Provider value={{
      editTask, deleteTask
    }}>
    <div className="container">
     <Divider orientation="left">Desk</Divider>

        <Input placeholder="Task Name" value={taskTitle} onChange={e => setTitle(e.target.value)} onKeyPress={addTask}/>

        <TaskList tasks={tasks} />
    </div>
    </Context.Provider>
  );
} 
