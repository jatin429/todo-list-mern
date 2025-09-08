import { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;

  const loadTodos = async () => {
    try {
      const res = await axios.get(API_URL);
      setTodos(res.data.data);
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  const handleAddTodo = async (todo) => {
    try {
      await axios.post(API_URL, todo);
      loadTodos();
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  const handleComplete = async (id) => {
    try {
      await axios.patch(`${API_URL}/${id}`);
      loadTodos();
    } catch (err) {
      console.error("Error completing todo:", err);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList todos={todos} onComplete={handleComplete} />
    </div>
  );
}

export default App;
