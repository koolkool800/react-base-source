import { createContext, Dispatch } from "react";
import { Action, initialState, State } from "./reducer";

const ctx = createContext<[State, Dispatch<Action>]>([initialState, (action) => {},])

export default ctx;