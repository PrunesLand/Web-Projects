/* eslint-disable default-case */
import React,{ useState, useEffect } from "react";
import test1 from './Images/GridImages/css.jpg'
import test2 from './Images/GridImages/html.jpg'
import test3 from './Images/GridImages/java.jpg'

function App() {
  
  const photos = [
    {
      id:0,
      photo:test1
    },
    {
      id:1,
      photo:test2
    },
    {
      id:2,
      photo: test3
    }
  ]
  const [counter, setCounter] = useState(0)
  

  
  const add = () => {
    resetCount()
    setCounter(counter + 1)
    console.log(counter)
  }

 

  const subt = () => {
    setCounter(counter - 1)
    resetCount()
  }

  const resetCount = () => {
    
    
    if(counter > 1){
      setCounter(0)
    }
  }
  

  

  return (
    <section >
      <h2>{counter}</h2>
      {/* <button onClick={subt}>subtract</button> */}
      <button onClick={add}>change</button>
      <img src={photos[counter].photo} alt='test' style={{height: '200px', objectFit: "cover"}}/>
    </section>
  );
}

export default App;
