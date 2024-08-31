import React, { useState } from 'react'


const App = () => {
  const[demo,setdemo]=useState(0)
  const handleClick = () => setdemo(demo + 1);
  const handleClickn =()=> setdemo(demo-1)
   
  
 
  
  return (
    <div>
     
      <h1>
        Counter: {demo < 0 ? 'negetive value' : demo}
      </h1>
      <button onClick={handleClick}>+</button>
      <button onClick={handleClickn}>-</button>
    </div>
  )
}

export default App
