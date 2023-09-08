
import GlobalContext from "./components/hooks/useContext";
import { useState } from "react";
import TodoList from "./components/page/todo";


function App() {

  const [todolist, setTodolist] = useState(JSON.parse(localStorage.getItem("todoList"))||[])
  const [deleteId, setDeleteId] = useState(null)


  const hendleSetTodoList = (value) => {
    setTodolist(value); 
    localStorage.setItem("todoList", JSON.stringify(value));
  };
  const hendleSetDeteleId = (value) => {
    setDeleteId(value); 
  };
  return (

    <GlobalContext.Provider value={{ todolist, setTodolist: hendleSetTodoList, deleteId, setDeleteId: hendleSetDeteleId }}>
      <TodoList/>
    </GlobalContext.Provider>
  )
}

export default App
