import { useContext } from "react";
import ctx from "./context";

export const useStore = () => {
  
  return useContext(ctx);
}