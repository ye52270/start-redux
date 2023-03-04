import { connect } from "react-redux";
import TodoList from "../components/TodoLIst";

const mapStateToProps = (state) => {
  console.log("state : ", state);
  return {
    todos: state.todos,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
