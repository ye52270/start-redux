import { connect } from "react-redux";
import addToDo from "../redux/actions";
import TodoForm from "../components/TodoForm";

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    add: (text) => {
      dispatch(addToDo(text));
    },
  };
};

const TodoFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);

export default TodoFormContainer;
