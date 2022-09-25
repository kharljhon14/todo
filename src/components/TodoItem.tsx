import { Todo } from "../model/todo";

interface props {
   todo: Todo;
   onDeleteTodo: (id: string) => void;
}

function TodoItem({ todo, onDeleteTodo }: props) {
   function handleRemove() {
      onDeleteTodo(todo.id);
   }

   return (
      <tr>
         <td>{todo.id}</td>
         <td>{todo.title}</td>
         <td>{todo.description}</td>
         <td>
            <button onClick={handleRemove} className="ui button negative">Delete</button>
         </td>
      </tr>
   );
}

export default TodoItem;
