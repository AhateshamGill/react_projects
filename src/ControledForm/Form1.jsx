import React, { useState } from 'react'

const Form = () => {
  const [name,setName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  const handleClick = (e)=> {
    e.preventDefault()
    console.log(name + " " + lastName + " " + email + " " + password + " " + confirmPassword)
    setName('')
    setLastName('')
    setEmail('')
    setPassword('');
    setConfirmPassword('');
    const userData = {
      name, lastName, email, password, confirmPassword
    }
    console.log(userData)
  }
  return (
    <>
    <h1 className='display-1 text-center'>Controlled Form</h1>
    <div className="container col-lg-6 p-4 rounded-3 mx-auto shadow mt-4">
      <form>
        <label htmlFor="First_Name">First_Name:</label>
        <input type='text' placeholder='Please Enter Your Name'
        className='form-control my-2'
        value={name}
        onChange={(e)=>setName(e.target.value)}  
        />
        <label htmlFor="Last_Name">Last_Name:</label>
        <input type='text' placeholder='Please Enter Your Name'
        className='form-control my-2'
        value={lastName}
        onChange={(e)=>setLastName(e.target.value)}  
        />
        <label htmlFor="Email">Email:</label>
        <input type="email" placeholder='Please Enter Your Email' 
        className='form-control my-2' 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        <label htmlFor="Password">PassWord:</label>
        <input type="password"
        placeholder='Please Enter Your Password'
        className='form-control my-2'
        value={password} 
        onChange={(e)=>setPassword(e.target.value)}
        />
        <label htmlFor="password">Confirm_PassWord:</label>
        <input type='password' placeholder='Please Enter Your Name'
        className='form-control my-2'
        value={confirmPassword}
        onChange={(e)=>setConfirmPassword(e.target.value)}  
        />
        <button onClick={handleClick} className="btn btn-success my-2 w-100">Add Fields</button>
      </form>
    </div>
    </>
  )
}

export default Form