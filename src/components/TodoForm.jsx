import { useRef } from "react";

export default function TodoForm({ add }) {
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
