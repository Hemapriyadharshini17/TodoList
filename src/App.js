import NewTodo from "./components/NewGoal/NewTodo";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import { useState } from "react";

function App() {
  const [listTodo, setListTodo] = useState([
    { id: "List1", text: "Eat" },
    { id: "List2", text: "Learn" },
    { id: "List3", text: "Sleep" },
  ]);

  const addNewTodoHandler = (newTodo) => {
    setListTodo((prevlistTodo) => prevlistTodo.concat(newTodo));
  };
  return (
    <div className="list-todo">
      <h2>Todo list</h2>
      <NewTodo onAddTodo={addNewTodoHandler} />
      <TodoList todo={listTodo} />
    </div>
  );
}

export default App;
