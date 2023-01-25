import React from 'react'
import { useState } from 'react'
import "./cal.css"
const Calculator = () => {
    let[result,setResult]=useState("")

    let handClick=(e)=>{
      console.log(e.target)
setResult(result.concat(e.target.name))
    }
let Clear=()=>{
  setResult("")
}
let FF=()=>{
  setResult(result.slice(0,-1))
}
let calculate=()=>{
  try{ 
  setResult(eval(result))

  }
  catch(ee)
  {
    setResult("error")
  }
}
    
  return (
    <>
<div className='container'>
        <form>
            <input type="text" value={result}/>
        </form>

     <div className='sub'>
<button onClick={Clear} className="sub1">clear</button>
<button onClick={FF} className="sub2">B</button>
<button name="/" onClick={handClick} className="sub3">/</button>
<button name="7" onClick={handClick} >7</button>
<button name="8" onClick={handClick} >8</button>
<button name="9" onClick={handClick }>9</button>
<button name="*" onClick={handClick}>*</button>
<button name="4" onClick={handClick}>4</button>
<button name="5" onClick={handClick}>5</button>
<button name="6" onClick={handClick}>6</button>
<button name="-" onClick={handClick}>-</button>
<button name="1" onClick={handClick}>1</button>
<button name="2" onClick={handClick}>2</button>
<button name="3" onClick={handClick}>3</button>
<button name="+" onClick={handClick}>+</button>
<button name="0" onClick={handClick}>0</button>
<button name="." onClick={handClick}>.</button>
<button onClick={calculate} className="result">=</button>
</div>
</div>
 </>
    
  )
}

export default Calculator