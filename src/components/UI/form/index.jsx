import React, { useState ,useContext} from 'react';
import { Checkbox, InputNumber, Select, Switch } from 'antd';
import { useForm } from "react-hook-form";
import cls from "./form.module.scss"
import { v4 as uuidv4 } from 'uuid';
import GlobalContext from '../../hooks/useContext';


export default function Form() {
  const setDark = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark')
  }
  const setLight = () => {
    document.querySelector('body').setAttribute('data-theme', 'light')
  }
  
 
  const { register, handleSubmit, getValues, setValue, formState: { errors }, reset } = useForm()
  const [isemloyed, setIsemloyed] = useState(false)
  const [tF, setFt] = useState(false)
  const [age, setage] = useState(0)
  const [Subscribed, setSubscribed] = useState('Subscribed')

  const { todolist, setTodolist } = useContext(GlobalContext)
  const { deleteId } = useContext(GlobalContext)
  
  const AddData = (data) => {
    const Result = { id: uuidv4(), isemloyed, age, Subscribed, ...data }
    const newTodolist = todolist?.data || []
    newTodolist.push(Result)
    setTodolist({change: !tF, data: newTodolist})
    setIsemloyed(false)
    setSubscribed("Subscribed")
    setFt(!tF)
    setage(0)
    reset()
  }

  


  return (
    <div className={cls.Form}>
          <p className={cls.Form__title}>Insert Row</p>  
          <div className={cls.Form__line}></div>
          <form onSubmit={handleSubmit(AddData)}>
        <label className={cls.Form__Label}>
          <input
            className={`${cls.Form__input} ${errors?.name ? cls.Form__inputEr : ""}`}
            type="text"
            placeholder='name'
            {...register(`name`, { required: "name is required" })}

          />  

          {errors?.name ? <p >{ errors?.name?.message}</p>:""}
        </label>
          <InputNumber
              className={cls.Form__input}
              defaultValue={age}
              placeholder="age"
              type={"number"}
              value={age}
              min={1}
              max={1000}
              onChange={(e)=>setage(e)}
        
          />
          <Select
            defaultValue="Subscribed"
            onChange={(e)=>setSubscribed(e)}
            options={[
                { value: 'Subscribed', label: 'Subscribed' },
                { value: 'Not Subscribed', label: 'Not Subscribed' },
                { value: 'Other', label: 'Other' },
          ]} 
       
          />
      <div className={cls.Form__tema} onClick={()=>setIsemloyed(!isemloyed)}>
        <div className={`${cls.Form__tema__ckeck} ${isemloyed? cls.Form__checked :""}`} >
        </div> 
        <p className={cls.Form__tema__text}>Employed</p>
      </div>

      <button className={cls.Form__btn}>Insert</button>
      </form>
      
      <hr />
      <label className={cls.Form__tema} style={{marginTop:"20px"}}>
        <Switch
          className={cls.Form__swich}
          defaultChecked
          onChange={(e)=>e == true ?   setDark():setLight()}
          />
          Made
      </label>
      <button
        className={cls.Form__btn}
        onClick={() => {
          const Fintindex = todolist?.data?.findIndex(e => e?.id == deleteId)
          if (Fintindex > 0) {
            const newTodolist = todolist?.data
            newTodolist.splice(Fintindex,1)
          setTodolist({ change: !tF, data: newTodolist })
          setFt(!tF)
         }
      }}>Delete</button>
    </div>
  )
}




