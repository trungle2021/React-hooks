import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import ToDoForm from "./components/TodoForm";

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "Todo 1",
      completed: false,
    },
    {
      id: 2,
      title: "Todo 2",
      completed: false,
    },
    {
      id: 3,
      title: "Todo 3",
      completed: false,
    },
    {
      id: 4,
      title: "Todo 4",
      completed: false,
    },
    {
      id: 5,
      title: "Todo 5",
      completed: false,
    },
    {
      id: 6,
      title: "Todo 6",
      completed: false,
    },
    {
      id: 7,
      title: "Todo 7",
      completed: false,
    },
    {
      id: 8,
      title: "Todo 8",
      completed: false,
    },
    {
      id: 9,
      title: "Todo 9",
      completed: false,
    },
  ]);
  function handleToDoClick(todo) {
    const index = todoList.findIndex((ele) => ele.id === todo.id);
    if (index < 0) return;
    const newToDoList = [...todoList];
    newToDoList.splice(index, 1);
    setTodoList(newToDoList);
  }

  function handleSubmitForm(formValues) {
    const newToDoList = [...todoList];
    const lastTodo = newToDoList[newToDoList.length - 1];
    const newTodo = {
      id: lastTodo.id + 1,
      ...formValues,
    };
    newToDoList.push(newTodo);
    setTodoList(newToDoList);
  }
  return (
    <div className="App">
      <ToDoForm onSubmit={handleSubmitForm} />
      <TodoList todos={todoList} onToDoClick={handleToDoClick} />
    </div>
  );
}

export default App;
