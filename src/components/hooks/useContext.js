import { createContext } from "react";

const GlobalContext = createContext({
  todolist: [],
  deleteId: false,
});

export default GlobalContext;
