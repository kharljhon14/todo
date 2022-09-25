import React from "react";
import "./TodoList.css"

function TodoList(){
    return(
        <table className="todo-list">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Delete</th>
                </tr>
            </thead>
        </table>
    )
}

export default TodoList;