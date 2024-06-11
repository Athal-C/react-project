export function Delete({ todo, deleteTodo }) {
  return (
    <button onClick={() => deleteTodo(todo.id)} className='btn btn-danger'>
      Delete
    </button>
  );
}
