import { Toggle } from "./Toggle";
import { Delete } from "./Delete";

export function List({ todo, deleteTodo, toggleTodo }) {
  return (
    <li>
      <label>
        <Toggle todo={todo} toggleTodo={toggleTodo} />
        {todo.title}
      </label>
      <Delete todo={todo} deleteTodo={deleteTodo} />
    </li>
  );
}
