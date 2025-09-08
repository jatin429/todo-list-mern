const TodoList = ({ todos, onComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          <span className={todo.status === "Completed" ? "completed" : ""}>
            {todo.title} ({todo.status})
          </span>
          {todo.status !== "Completed" && (
            <button onClick={() => onComplete(todo._id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
