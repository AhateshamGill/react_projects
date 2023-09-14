import React from 'react'
import {FcFullTrash} from 'react-icons/fc'


const SingleTodo = ({todo,id,deleteTodo}) => {
   
  return (
    <>
    <h5>{todo}</h5>
    <FcFullTrash onClick={()=>deleteTodo(id)} style={{cursor:'pointer'}}/>

    </>
  )
}

export default SingleTodo