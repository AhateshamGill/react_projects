import React, { useState } from 'react'

const ObjectForm = () => {
    const [formFields,setFormFields] = useState({
        name:'',l_name:'',email:'',password:'',c_password:''
    })
    const {name,l_name,email,password,c_password} = formFields;
    // handle the change
    const handleChange = (e)=>{
        // const inputField = e.target.name;
        // const val = e.target.value;
        // console.log(val)
        setFormFields((prevValue) =>({
            ...prevValue,
            [e.target.name] : e.target.value
            // [inputField] : val
        }))      
    }
    return (
        <>
            <h1 className='display-1 text-center'>Controlled Form</h1>
            <div className="container col-lg-6 p-4 rounded-3 mx-auto shadow mt-4">
                <form>
                    <label htmlFor="First_Name">First_Name:</label>
                    <input type='text' placeholder='Please Enter Your Name'
                        className='form-control my-2'
                    name='name'    
                    value={name}
                    onChange={handleChange}    
                    />
                    <label htmlFor="Last_Name">Last_Name:</label>
                    <input type='text' placeholder='Please Enter Your Name'
                        className='form-control my-2'
                    name='l_name'    
                    value={l_name}
                    onChange={handleChange}    
                    />
                    <label htmlFor="Email">Email:</label>
                    <input type="email" placeholder='Please Enter Your Email'
                        className='form-control my-2'
                    name='email'    
                    value={email}
                    onChange={handleChange}    
                    />
                    <label htmlFor="Password">PassWord:</label>
                    <input type="password"
                        placeholder='Please Enter Your Password'
                        className='form-control my-2'
                    name='password'    
                    value={password}
                    onChange={handleChange}    
                    />
                    <label htmlFor="password">Confirm_PassWord:</label>
                    <input type='password' placeholder='Please Enter Your Name'
                        className='form-control my-2'
                    name='c_password'    
                    value={c_password}
                    onChange={handleChange}    
                    />
                    <button className="btn btn-success my-2 w-100">Add Fields</button>
                </form>
            </div>
        </>
  )
}

export default ObjectForm