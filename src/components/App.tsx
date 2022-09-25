import { useEffect, useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Header from "./Header";
import "./App.css";
import { Todo } from "../model/todo";

function App() {
   const [todos, setTodos] = useState<Array<Todo>>([]);

   useEffect(() => {
      if (localStorage.getItem("todos") === null || localStorage.getItem("todos") === undefined) {
         localStorage.setItem("todos", "[]");
      } else {
         setTodos(JSON.parse(localStorage.getItem("todos") || "[]"));
      }
   }, []);

   useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
   }, [todos]);

   function handleTodo(todo: Todo) {
      setTodos([...todos, todo]);
   }

   function deleteTodo(id: string) {
      setTodos(todos.filter((todo) => todo.id !== id));
   }

   return (
      <div className="app">
         <Header />
         <Form onHandleTodos={handleTodo} />
         {todos.length > 0 ? <TodoList todos={todos} onDeleteTodo={deleteTodo} /> : ""}
      </div>
   );
}

export default App;
