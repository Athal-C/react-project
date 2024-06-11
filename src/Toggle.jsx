export function Toggle({ todo, toggleTodo }) {
  return (
    <input
      type='checkbox'
      checked={todo.completed}
      onChange={(e) => toggleTodo(todo.id, e.target.checked)}
    />
  );
}
