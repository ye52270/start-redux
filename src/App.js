import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoLIst";

function App() {
  return (
    <div className="App">
      <TodoList />
      <TodoForm />
      <br />
    </div>
  );
}
export default App;
