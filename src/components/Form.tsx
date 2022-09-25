import { FormEvent, useState } from "react";
import { Todo } from "../model/todo";
import "./Form.css";

interface props {
   onHandleTodos: (todo: Todo) => void;
}

function Form({ onHandleTodos }: props) {
   const [title, onSetTitle] = useState("");
   const [description, onSetDescription] = useState("");

   function onFormSubmit(evt: FormEvent) {
      evt.preventDefault();
      onHandleTodos({ id: (Date.now() * Math.random() * 30).toFixed(0).toString(), title: title, description: description });
      onSetTitle("")
      onSetDescription("")
   }

   return (
      <form onSubmit={onFormSubmit} className="ui form">
         <div className="field">
            <input required type="text" value={title} onChange={(evt) => onSetTitle(evt.currentTarget.value)} placeholder="Title" />
         </div>
         <div className="field">
            <textarea required name="todo" value={description} onChange={(evt) => onSetDescription(evt.currentTarget.value)} rows={15} placeholder="Description"></textarea>
         </div>
         <button className="ui primary fluid button">Add Todo</button>
      </form>
   );
}

export default Form;
