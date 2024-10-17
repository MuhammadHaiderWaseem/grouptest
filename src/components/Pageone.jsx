import React from 'react'
 import {useState} from 'react'
const Pageone = (props) => {
    const[count, setCount]=useState("")
  return (
    <div>
     <h1>Too DO list </h1> 
     {/* <input type='text' placeholder='search' onchange={(e) =>setCount(e.target.value)} value={count}></input> */}
     <input type='text'
      placeholder='search'
      onchange={(e) =>setCount(e.target.value) }
            value={count}
     ></input>
     <button type='button'
      onclick={
        () =>{props.addlistitem(count)
            setCount('')
         
      }}>ToDo</button>
      
    </div>
  )
}

export default Pageone
