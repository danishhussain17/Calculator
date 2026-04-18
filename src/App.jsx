import React from 'react'
import { useState } from 'react'
import { evaluate } from "mathjs";

const App = () => {

  const [val, setval] = useState('')

  //function for clicking buttons
  const handleClick=(i) => {
    setval((prev) => prev+i )
    
  }
  // function for all clear
  const handleClear=()=>{
    setval('')
  }

  //funtion for deleting last character
  const handleDEL=()=>{
    setval(val.slice(0,-1))
  }

  //function to calculate
const handleCal=()=>{
  try {
    const expression = val
      .replace(/x/g, "*")
      .replace(/÷/g, "/")
      .replace(/-/g, "-")
      .replace(/%/g, "/100*")

    const result=evaluate(expression)
    setval(String(result))
  } catch(err){
    setval("Error")
  }
};

  return (

    <div className=' w-full max-w-[70vw] mx-auto'>
{/* input */}
      <div>
        <div
        className=' w-full mx-auto text-right p-2 m-4'
        >{val || "0"}</div>
      </div>

{/* buttons */}
      <div
       className='grid grid-cols-4 gap-3  p-2'
      >
        <button className='btn-top' onClick={handleClear}>C</button>
        <button className='btn-top' onClick={()=>{handleClick('%')}}>{"\u0025"}</button>
        <button className='btn-top' onClick={()=>{handleClick('÷')}}>÷</button>
        <button className='btn-del' onClick={handleDEL}>DEL</button>

        <button className='btn-num' onClick={()=>{handleClick('7')}}>7</button>
        <button className='btn-num' onClick={()=>{handleClick('8')}}>8</button>
        <button className='btn-num' onClick={()=>{handleClick('9')}}>9</button>
        <button className='btn-op' onClick={()=>{handleClick('x')}}>{"\u00D7"}</button>

        <button className='btn-num' onClick={()=>{handleClick('4')}}>4</button>
        <button className='btn-num' onClick={()=>{handleClick('5')}}>5</button>
        <button className='btn-num' onClick={()=>{handleClick('6')}}>6</button>
        <button className='btn-op' onClick={()=>{handleClick('-')}}>-</button>

        <button className='btn-num' onClick={()=>{handleClick('1')}}>1</button>
        <button className='btn-num' onClick={()=>{handleClick('2')}}>2</button>
        <button className='btn-num' onClick={()=>{handleClick('3')}}>3</button>
        <button className='btn-op' onClick={()=>{handleClick('+')}}>{"\u002B"}</button>

        <button className='btn-num'>{"\u002B"}/{"\u2212"}</button>
        <button className='btn-num' onClick={()=>{handleClick('0')}}>0</button>
        <button className='btn-num' onClick={()=>{handleClick('.')}}>.</button>
        <button className='btn-eq' onClick={handleCal}>=</button>
      </div>

    </div>
  )
}

export default App
