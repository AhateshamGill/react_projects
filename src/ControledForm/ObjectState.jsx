import React, { useState } from 'react'

const ObjectState = () => {
    const [user, setUser] = useState({
        name:'Ahatesham', email:'ahatesham@gmail.com', age:'36'
    })
    // Destructure
    const {name,email,age} = user;
    // Handle the Click
    const changeName = () => {
        setUser({...user, name:'Ahatesham_Gill',email:'ahateshamgill@gmail.com',age:'37'})
    }
  return (
    <>
    <div className="container text-center">
        <h1>Hello {name}</h1>
        <h3>Email: {email}</h3>
        <h5>Age: {age}</h5>
        <button onClick={changeName} className="btn btn-success">Change_Name</button>
    </div>
    </>
  )
}

export default ObjectState