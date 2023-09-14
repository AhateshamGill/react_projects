// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { AppContext } from './context/context'

const NewComponent = () => {
    const {people} = useContext(AppContext)
    console.log(people)
  return (
    <div></div>
  )
}

export default NewComponent