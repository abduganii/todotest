import React, { useContext, useState } from 'react'
import GlobalContext from '../../hooks/useContext'
import cls from "./list.module.scss"

export default function List() {

  const { todolist, setTodolist } = useContext(GlobalContext)
  const { deleteId, setDeleteId} = useContext(GlobalContext)
  const [tF, setFt] = useState(false)
  return ( 
    <ul className={cls.List}>
      <li className={cls.List__item}>
        <p>Name</p>
        <p>Age</p>
        <p>Subscribed</p>
        <p >Employment</p>
        <p onClick={() => {
          setTodolist({ change: !tF, data: [] })
          setFt(!tF)
        }}>delete All</p>
      </li> 
      {
        todolist?.data?.map(e => (
          <li className={`${cls.List__item} ${deleteId == e?.id ? cls.List__listAcitive : ""}`} key={e?.id} onClick={() => {
            setDeleteId(state=> state !== e?.id ? e?.id : false)
          }}>
            <p>{ e?.name}</p>
            <p>{e?.age}</p>
            <p>{e?.Subscribed}</p>
            <p >{e?.isemloyed ? "Employment" : "Not Employment"}</p>
            <p></p>
        </li>
        ))
    }
    
    </ul>
  )
}
