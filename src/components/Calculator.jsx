import React, { useState } from 'react'
import { CalculatorContext } from '../context/CalculatorContext';
import CalculatorShow from './CalculatorShow';
import CalculatorButton from './CalculatorButton';
import "./Calculator.css";

const Calculator = () => {
  //계산이 보여지는 영역
  const [input, setInput] = useState("");
  //버튼을 클릭하면 보여질 영역을 제어할 메서드
  const handleClick = (value) => {
    console.log(value);
    if (value === "=") {
      try {
        //전체 문자를 수식으로 변경 
        let result = eval(input);
        //setInput에 넣을떄는 문자로 변경
        setInput(String(result));
      } catch (error) {
        setInput("Error");
      }
      
    } else if (value === "c") {
      setInput("");
    } else if (value === "<-") {
      //splice 특정위치부터 특정위치까지의 내용을 지우거나, 추가할때, 원본에 영향을 미침
      //slice 특정위치부터 특정위치까지 내용을 추출할때
      //원본에는 변화가 없고 새로운 배열을 만듬
      //a=  [1,2,3,4,5]
      //a.slice(1,3) -> 2,3
      //a.slice(0,-1) -> 1,2,3,4 뒤에 오는 숫자가 -이면 뒤에서부터 센다
      setInput(input.slice(0, -1));
    }
    else {
      setInput(input + value);
    }
  }
  return (
    <CalculatorContext.Provider value={{ input, setInput, handleClick }}>
      <div className='calculator-layout'>
        <CalculatorShow />
        <CalculatorButton />
      </div>
    </CalculatorContext.Provider>
  )
}

export default Calculator