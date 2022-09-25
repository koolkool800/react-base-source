import { ReactNode, useReducer } from "react";
import ctx from "./context";
import reducer, { initialState } from "./reducer";

type Props = { children: ReactNode };

const Provider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <ctx.Provider value={[state, dispatch]}>{children}</ctx.Provider>;
};
export default Provider;
