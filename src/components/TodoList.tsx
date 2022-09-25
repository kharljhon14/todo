import React from "react";
import { Todo } from "../model/todo";
import TodoItem from "./TodoItem";
import "./TodoList.css";

interface props {
   todos: Array<Todo>;
   onDeleteTodo: (id: string) => void;
}

function TodoList({ todos, onDeleteTodo }: props) {
   const renderedTodos = todos.map((todo) => {
      return <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo}/>;
   });

   return (
      <table className="todo-list ui celled padded table">
         <thead>
            <tr>
               <th>ID</th>
               <th>Title</th>
               <th>Description</th>
               <th>Delete</th>
            </tr>
         </thead>
         <tbody>{renderedTodos}</tbody>
      </table>
   );
}

export default TodoList;
