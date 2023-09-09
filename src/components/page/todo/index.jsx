import Form from "../../UI/form"
import List from "../../UI/list"
import cls from "./todo.module.scss"

export default function TodoList() {
  return (
    <div className={cls.TodoList}>
    <Form/>
    <List/>
    </div>
  )
}
