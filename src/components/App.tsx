import React from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import "./App.css"

function App() {
   return (
      <div className="app">
         <Form />
         <TodoList />
      </div>
   );
}

export default App;
