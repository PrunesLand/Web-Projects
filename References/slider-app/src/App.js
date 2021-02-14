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
  const [catcher, setCatcher] = useState(photos[0].photo)

  
  const add = () => {
    
    changeImg()
    if(counter < photos.length-1){

      setCounter(counter + 1)
    }else{
      setCounter(0)
    }
    
    console.log(counter)
  }
  const handleCLick = () => {
    add()
  }

 

  // const subt = () => {
  //  setCounter(counter - 1)
    
  // }

  const changeImg = () => {
    
   switch (counter){
      case 0:
        setCatcher(photos[1].photo)
        break;
      case 1:
        setCatcher(photos[2].photo)
        break;
      case 2:
        
        setCatcher(photos[0].photo)
        break;
    }
  }
  
  
  useEffect(() => {
    const timer = setInterval(add, 2000)
    
    return () => {
      clearInterval(timer)
    }
  }, [counter]) // eslint-disable-line react-hooks/exhaustive-deps
  const [[windowWidth, windowHeight], setWindowSize] = useState([
		window.innerWidth,
		window.innerHeight,
	]);
  const [visible, setVisible] = useState(false);
useEffect(() => {
	const handleResize = () => {
		setWindowSize([window.innerWidth, window.innerHeight]);
		setVisible(true);
		setTimeout(() => setVisible(false), 1000);
	};
	window.addEventListener("resize", handleResize);
	return () => window.removeEventListener("resize", handleResize);
}, []);

 
  

  

  return (
    <section >
      <h2>{counter}</h2>
      {/* <button onClick={subt}>subtract</button> */}
      <button onClick={handleCLick}>change</button>
      <img src={catcher} alt='test' style={{height: '200px', objectFit: "cover"}}/>
      <div style={{display: visible? 'block': 'none'}}>

      {windowWidth} {windowHeight}
      </div>
      
    </section>
  );
}

export default App;
