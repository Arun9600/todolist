import { useState, useEffect } from 'react'

const DigitalClock = () => {

const [date,setDate] = useState(new Date());

const clock = () => {
    setDate(new Date())
}

useEffect(() =>{
setInterval(clock,1000);
},[]);
 
    return (
    <>
    <div style={{textAlign:'center',marginTop:'30px'}}>
      <h1>Digital Clock (IST)</h1>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
    
    </>
  )
}

export default DigitalClock
