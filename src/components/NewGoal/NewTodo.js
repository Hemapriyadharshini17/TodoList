import React, { useState } from "react";
import "./NewTodo.css";
const NewTodo = (props) => {
  const [addTodo, setTodo] = useState();
  const addTodoHandler = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Math.random().toString(),
      text: addTodo,
    };
    setTodo('')
    props.onAddTodo(newTodo);
    console.log(newTodo);
  };
  const textChangeHandler = (event) => {
    setTodo(event.target.value);
  };
  return (
    <form className="new-todo" onSubmit={addTodoHandler}>
      <input type="text" value={addTodo} onChange={textChangeHandler} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
