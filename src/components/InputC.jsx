import React, {useState} from 'react'
import { Buttons } from './Buttons';

export function InputC({theme}){
    const [inputVal,setInputVal] = useState('')

   
    function pressbutton(num){
        if(Number(num) === 0 || Number(num)){
             setInputVal(prevInputVal => prevInputVal +num);
            }
       else{
           if(Number(inputVal[inputVal.length-1]) || Number(inputVal[inputVal.length-1])===0)
            {setInputVal(prevInputVal => prevInputVal +num);}
       }
    }
    function reset(){
        setInputVal(prevInputVal => '');
    }
    function equal(){
        if(Number(inputVal[inputVal.length-1]))
        {setInputVal(prevInputVal => eval(prevInputVal) +'')}
    }
    function erase(){
        if(inputVal !== ''){
            setInputVal(prevInputVal => prevInputVal.slice(0,(prevInputVal.length  - 1)))
        }
    }

    return(
        <div id='divInputs'>
            <input className={`themei${theme}`}  id='input'  readOnly='readonly'  value={inputVal + ''}></input>
            <Buttons theme={theme} pressbutton={pressbutton} reset={reset} erase={erase} equal={equal} />
        </div>
    )
}