import React, {useState} from 'react'
import { Buttons } from './Buttons';

export function InputC({theme}){
    const [inputVal,setInputVal] = useState('')

   
    function pressbutton(num){
        if(Number(num) === 0 || Number(num)){
             setInputVal(prevInputVal => prevInputVal +num);
            }
       else{
           if((Number(inputVal[inputVal.length-1]) || Number(inputVal[inputVal.length-1])===0) && inputVal[inputVal.length-1] !== ' '){
               if(num === '.'){
                   let res = inputVal.split(' ');
                   if(!res[res.length-1].includes('.')){
                setInputVal(prevInputVal => prevInputVal +num);
               }
            }
               else{
                   setInputVal(prevInputVal => prevInputVal +` ${num} `);
               }
            }
       }
    }
    function reset(){
        setInputVal(prevInputVal => '');
    }
    function equal(){
        if((Number(inputVal[inputVal.length-1]) || Number(inputVal[inputVal.length-1])===0) && inputVal[inputVal.length-1] !== ' '){
            let res = inputVal.split(' ')
            while(res.indexOf('*') !== -1 || res.indexOf('/') !== -1){
            if(res.indexOf('*') !== -1){
                let index = res.indexOf('*')
                let num1 = Number(res[index-1])
                let num2 = Number(res[index+1])
                let a = num1 * num2
                res.splice((index-1),3,a)
            }
            if(res.indexOf('/') !== -1){
                let index = res.indexOf('/')
                let num1 = Number(res[index-1])
                let num2 = Number(res[index+1])
                let a = num1 / num2
                res.splice((index-1),3,a)
            }
        }
        while(res.length !== 1){
            let num1 = Number(res[0])
            let num2 = Number(res[2])
            if(res[1] === '+'){
                let a = num1 + num2
                res.splice(0,3,a)
            }
            else{
                let a = num1 - num2
                res.splice(0,3,a)
            }
        }
        setInputVal(res.join(''))
    }
}
    function erase(){
        if(inputVal !== ''){
            if(inputVal[inputVal.length-1] === ' '){
                setInputVal(prevInputVal => prevInputVal.slice(0,(prevInputVal.length  - 3)))
            }
            else{
                setInputVal(prevInputVal => prevInputVal.slice(0,(prevInputVal.length  - 1)))
            }
        }
    }

    return(
        <div id='divInputs'>
            <input className={`themei${theme}`}  id='input'  readOnly='readonly'  value={inputVal + ''}></input>
            <Buttons theme={theme} pressbutton={pressbutton} reset={reset} erase={erase} equal={equal} />
        </div>
    )
}