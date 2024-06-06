import { useState } from "react";
import "./style.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });

    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <>
      <div className='bg-dark text-light wall'>
        <div className='container d-flex justify-content-center align-center flex-wrap'>
          <form
            onSubmit={handleSubmit}
            className='new-item-form d-flex justify-content-center align-center flex-wrap col-12 my-5'
          >
            <div className='row justify-content-center align-center flex-wrap'>
              <div className='mb-3 col-12'>
                <label>New Item</label>
                <input
                  value={newItem}
                  onChange={(e) => setNewItem(e.target.value)}
                  type='text'
                  id='item'
                />
              </div>
              <button className='btn btn-primary col-12 btn-add'>Add</button>
            </div>
          </form>
          <h1 className='header'>Todo List</h1>
          <ul className='list'>
            {todos.map((todo) => {
              return (
                <li key={todo.id}>
                  <label>
                    <input
                      type='checkbox'
                      checked={todo.completed}
                      onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                    />
                    {todo.title}
                  </label>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className='btn btn-danger'
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
