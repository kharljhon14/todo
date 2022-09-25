import React from "react";
import "./Form.css"

function Form() {
   return (
      <form className="form">
         <input className="form__input-title" type="text" placeholder="Title" />
         <textarea className="form__input-todo" name="todo" rows={15} placeholder="Description"></textarea>
      </form>
   );
}

export default Form;
