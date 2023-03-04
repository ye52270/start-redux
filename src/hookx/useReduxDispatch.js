import { useContext } from "react";
import ReduxContext from "../context/reduxContext";

export default function useReduxDispatch() {
  const store = useContext(ReduxContext);
  return store.dispatch;
}
