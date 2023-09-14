// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'

const UseRef = () => {
    const head = useRef(null);
    const handleClick = () => {
        const myHead = head.current.style;
        myHead.color = 'red';
        myHead.transition = 'all 06s';
        myHead.transform = 'translateX(1190px)';
        
    };
    
    return (
    <>
    <h1 ref={head}>Hello World</h1>
    <button onClick={handleClick}>
        Change Color
    </button>
    </>
    )
}

export default UseRef