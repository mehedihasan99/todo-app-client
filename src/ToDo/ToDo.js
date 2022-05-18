import React from "react";

const ToDo = () => {
  const [myTodo, setMyTodo] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos) {
      setMyTodo(loadedTodos);
    }
  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(myTodo);
    localStorage.setItem("todos", json);
  }, [myTodo]);

  function handleSubmit(e) {
    e.preventDefault();

    const myNewTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setMyTodo([...myTodo].concat(myNewTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...myTodo].filter((todo) => todo.id !== id);
    setMyTodo(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...myTodo].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setMyTodo(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...myTodo].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setMyTodo(updatedTodos);
    setTodoEditing(null);
  }
  return (
    <div id="todo-list">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button className="bg-primary input-btn" type="submit">
          {" "}
          Input{" "}
        </button>
      </form>
      {myTodo.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-text">
            <input
              type="checkbox"
              id="completed"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {todo.id === todoEditing ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) : (
              <div>{todo.text}</div>
            )}
          </div>
          <div className="todo-actions">
            {todo.id === todoEditing ? (
              <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
            ) : (
              <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
            )}

            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToDo;
