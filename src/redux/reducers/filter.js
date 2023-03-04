import { SHOW_ALL, SHOW_COMPLETE } from "../actions";
export default function filter(prevState = "ALL", action) {
  switch (action.type) {
    case SHOW_ALL:
      return "ALL";
    case SHOW_COMPLETE:
      return "COMPLETE";

    default:
      return prevState;
  }
}
