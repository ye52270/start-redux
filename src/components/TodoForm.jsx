import { useRef } from "react";
import { connect } from "react-redux";
import addToDo from "../redux/actions";

function TodoForm({ add }) {
  const inputRef = useRef();

  return (
    <form
      onSubmit={(e) => {
        click(e);
      }}
    >
      <input type="text" ref={inputRef}></input>
      <button onClick={click}>추가</button>
    </form>
  );

  function click(e) {
    e.preventDefault();
    add(inputRef.current.value);
    inputRef.current.value = "";
  }
}

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
