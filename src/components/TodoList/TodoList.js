import React from 'react'
import "./TodoList.css"
const TodoList =props => {
  return (
   <ul className='todo-list'>
    {props.todo.map(todo=>{
        return<li key={todo.id}>{todo.text}</li>
    })}
   </ul>
  )
}

export default TodoList

