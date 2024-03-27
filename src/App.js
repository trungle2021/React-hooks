import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import ToDoForm from "./components/TodoForm";
import PostList from "./components/PostList";
import Pagination from "./components/Pagination";
import queryString from "query-string";
import PostFiltersForm from "./components/PostFiltersForm";
import Clock from "./components/Clock";

function App() {
  // const [todoList, setTodoList] = useState([
  //   {
  //     id: 1,
  //     title: "Todo 1",
  //     completed: false,
  //   },
  //   {
  //     id: 2,
  //     title: "Todo 2",
  //     completed: false,
  //   },
  //   {
  //     id: 3,
  //     title: "Todo 3",
  //     completed: false,
  //   },
  //   {
  //     id: 4,
  //     title: "Todo 4",
  //     completed: false,
  //   },
  //   {
  //     id: 5,
  //     title: "Todo 5",
  //     completed: false,
  //   },
  //   {
  //     id: 6,
  //     title: "Todo 6",
  //     completed: false,
  //   },
  //   {
  //     id: 7,
  //     title: "Todo 7",
  //     completed: false,
  //   },
  //   {
  //     id: 8,
  //     title: "Todo 8",
  //     completed: false,
  //   },
  //   {
  //     id: 9,
  //     title: "Todo 9",
  //     completed: false,
  //   },
  // ]);

  // const [postList, setPostList] =

  // function handleToDoClick(todo) {
  //   const index = todoList.findIndex((ele) => ele.id === todo.id);
  //   if (index < 0) return;
  //   const newToDoList = [...todoList];
  //   newToDoList.splice(index, 1);
  //   setTodoList(newToDoList);
  // }

  // function handleSubmitForm(formValues) {
  //   const newToDoList = [...todoList];
  //   const lastTodo = newToDoList[newToDoList.length - 1];
  //   const newTodo = {
  //     id: lastTodo.id + 1,
  //     ...formValues,
  //   };
  //   newToDoList.push(newTodo);
  //   setTodoList(newToDoList);
  // }

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 10,
  });

  const handleOnPageChange = (newPage) => {
    setFilters({
      ...filters,
      _page: newPage,
    });
  };

  const handleFiltersChange = (searchTerm) => {
    setFilters({
      ...filters,
      _page: 1,
      title_like: searchTerm,
    });
  };

  useEffect(() => {
    try {
      const fetchPostList = async () => {
        const paramString = queryString.stringify(filters);
        const postListAPI = `https://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const response = await fetch(postListAPI);
        const data = await response.json();
        setPostList(data.data);
        setPagination(data.pagination);
      };

      fetchPostList();
    } catch (error) {
      console.log(error);
    }
  }, [filters]);

  return (
    <div className="App">
      <h1>Post List</h1>
      <Clock />
      <PostFiltersForm onSubmit={handleFiltersChange} />
      <PostList postList={postList} />
      <Pagination pagination={pagination} onPageChange={handleOnPageChange} />

      {/* <ToDoForm onSubmit={handleSubmitForm} />
      <TodoList todos={todoList} onToDoClick={handleToDoClick} /> */}
    </div>
  );
}

export default App;
