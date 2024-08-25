import React,{useState,useEffect} from 'react'

const About = () => {
  const [number, setnumber] = useState([]);
 useEffect(() => {
  
  let Num = [];

  for (let i = 1; i <101 ; i++) {
       Num.push(i)  
  }
  setnumber(Num)
 }, []);
  return (
    <div>{
      number.map((numbers)=>
        <h1 className='text-6xl' >{numbers}</h1>
      )
      }</div>
  )
}

export default About