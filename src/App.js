import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoListContainer from "./components/TodoLIst";
import TodoList from "./components/TodoLIst";

function App() {
  return (
    <div className="App">
      <TodoListContainer />
      <TodoForm />
      <br />
    </div>
  );
}
export default App;
