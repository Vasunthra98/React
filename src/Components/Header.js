import React,{useState} from 'react'

const Header = () => {
    const[name,setname]=useState("Vasu");
    function ch()
    {
        setname("Vasunthra");
    }
  return (
    <div>
        <p>Name={name}</p>
        <button onClick={ch}>click</button>
    </div>
  )
}

export default Header