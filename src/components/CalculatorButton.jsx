import React, { useContext } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'
import "./CalculatorBtn.css"

const buttons = [
    "c", "<-", "/", "*",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "0", "."
]
const CalculatorButton = () => {
    const { handleClick } = useContext(CalculatorContext);
    return (
        <div className='buttons'>
            {buttons.map((btn, id) => (
                <button key={id} onClick={()=> handleClick(btn)}>{btn}</button>
            ))}
        </div>
    )
}


export default CalculatorButton