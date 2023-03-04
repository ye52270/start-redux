import { useRef } from "react";
import useReduxDispatch from "../hookx/useReduxDispatch";
import addToDo from "../redux/actions";
export default function TodoForm() {
  const inputRef = useRef();
  const dispatch = useReduxDispatch();

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
    dispatch(addToDo(inputRef.current.value));
    inputRef.current.value = "";
  }
}
