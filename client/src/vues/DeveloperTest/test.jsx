import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./test.scss"
const test = () => {
    const navigate = useNavigate()
  return (
    <div className='test__all'>
        <div className="window">
            <div className="window__title">
                <p>Identity reveal test ! </p>
                <div className="window__buttons">
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                
            </div>
            <div className="window__content">
                <p>Dont worry ! this is a generic algorithm to check if you're a developer or not .</p>
                <p>Complete the solveMeFirst function By choosing one of the buttons below.</p>
            <p>
                solveMeFirst is a function that will help us do the sum of 2 numbers and it has the following parameters:
                int a: the first value
                int b: the second value
    
            </p>
            <p>
               {" 0)-sum = solveMeFirst(num1,num2)"}</p>
             <p>{"1)-Function solveMeFirst(num1,num2)"}  </p>
             <p>Guess what's next ?  </p>
             <div>
             <button className='windows__button' onClick={()=>navigate("/error")}> {"2) num1 + num2"}  </button>

             <button className='windows__button' onClick={()=>navigate("/error")} > {"2) c= num1 + num2"} </button>
             <button className='windows__button' onClick={e=>navigate("/developer/signup")}> {"2) return num1+num2"} </button>
             </div>

            </div>
        </div>
      
    </div>
  )
}

export default test
