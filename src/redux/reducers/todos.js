import { ADD_TODO, COMPLETE_TODO } from "../actions";

export default function todos(prevState = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...prevState, { text: action.text, done: false }];

    case COMPLETE_TODO:
      return prevState.map((todo, index) => {
        if (index === action.index) {
          return { ...prevState, done: true };
        }
        return todo;
      });

    default:
      return prevState;
  }
}
