
import React, { useState } from 'react'
// import Parent from './Parent';



const Child = (props) =>{

    function display(e){
        e.preventDefault();
        props.setInputValue(e.target.value);
    }
    return (
        <div className="child" >
            <h1>Child Component</h1>
            {/* <label htmlFor="input"></label> */}
            <input type="text" onChange={display}/>
        </div>
    )
}

export default Child;