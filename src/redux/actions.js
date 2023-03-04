export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETE = "SHOW_COMPLETE";

// action 생성 함수
export default function addToDo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  };
}

export function showAll() {
  return {
    type: SHOW_ALL,
  };
}

export function showComplete(inx) {
  return {
    type: SHOW_COMPLETE,
  };
}
