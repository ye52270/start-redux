import useReduxState from "../hookx/useReduxState";

export default function TodoList() {
  const state = useReduxState();
  console.log(state);
  return (
    <ul>
      {state.todos.map((todo, index) => (
        <li key={index}>{todo.text}</li>
      ))}
    </ul>
  );
}
