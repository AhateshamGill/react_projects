/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from 'react'
import { data } from './data';




// create a context
const peopleContext = createContext();
// provider , consumer 



const List = () => {
    const [people, setPeople] = useState(data);
    const remove = (id) => {
        setPeople(people.filter(person=>person.id !==id))
    }
  return (
    <peopleContext.Provider value={{
       remove
    }}>
        <People people={people} remove={remove} />
    </peopleContext.Provider>
  )
}


// eslint-disable-next-line react/prop-types
const People = ({ people }) => {
    return (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <>
        {/* // eslint-disable-next-line react/prop-types */}
        {people.map((person)=>{
            return <SinglePerson key={person.id}  {...person} />
        })}
        </>
    )
}

const SinglePerson =({id})=>{
    const {remove} = useContext(peopleContext);
    return (
        <>
        <h1>hello</h1>
        <button onClick={()=> remove(id)}>delete</button>
        </>
    )
}

export default List