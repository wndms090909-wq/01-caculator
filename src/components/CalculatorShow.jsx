import React, { useContext } from 'react'
import { CalculatorContext } from '../context/CalculatorContext'
import "./CalculatorShow.css";

const CalculatorShow = () => {
    const {input} =useContext(CalculatorContext);
  return (
    <div className='display'>
        {input || "0"}
    </div>
  )
}

export default CalculatorShow