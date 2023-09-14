import React, { useState } from 'react'
import '../assets/styles.css'
const Operators = () => {
    const [title, setTitle] = useState('Hello World')
    const [count,setCount] = useState(0);
    const text = 'Hello World';
    const [count1,setCount1] = useState(0);
  return (
    <>
     {/* //short circuits 
    // 2 operators - And/Or '&&' '||' */}
    <h1>{title && 'Hello World From And Operator'}</h1>
    <br/>
    <h1>{title || 'Hello World From OR Operator'}</h1>
    <br/>
    {/* // terniery operator */}
    {title ? (
        <h1>Title is True</h1>
    ) : (
        <h1>Title is False</h1>
    ) }
    <br/>
    <h1 className='display-1 text-center'> Counter </h1>
    <div className="container text-center">
        <h1 className={`display-1 ${count === 0 && 'yellow'} ${count > 0 ? 'text-success' : 'text-danger'}`}>{count}</h1>
        <button onClick={()=>setCount(count-1)} className="btn btn-danger mx-2">
            Decrease
        </button>
        <button onClick={()=>setCount(0)} className="btn btn-warning mx-2">Reset</button>
        <button onClick={()=>setCount(count+1)} className="btn btn-success mx-2">Increase</button>
    </div>
    <br/>
    <br/>
    <h1>{text && 'Hello World From the AnD Operator'}</h1>
    <br/>
    <h1>{text || 'Hello World Form the OR Operator'}</h1>
    <br/>
    {text ? (<h1>Text is True</h1>) : (<h1>Text is False</h1>)}
    <br/>
        <h1 className='display-1 text-center'>Counter</h1>
    <div className="container text-center">
        <h1 className={`display-1 ${count1 === 0 ? ('text-warning') : (count1 > 0 ? 'text-success' : 'text-danger')}`}>{count1}</h1>
        <button onClick={()=>setCount1(count1-1)} className="btn btn-danger mx-2">Decrease</button>
        <button onClick={()=>setCount1(0)} className="btn btn-warning mx-2">Reset</button>
        <button onClick={()=>setCount1(count1+1)} className="btn btn-success mx-2">Increase</button>
    </div>
    <br/>
    </>
  )
}

export default Operators
