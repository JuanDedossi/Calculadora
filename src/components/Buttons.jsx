import React from 'react'

export function Buttons({pressbutton, erase, equal, reset,theme}){
    const press = (e) =>{
        pressbutton(e.currentTarget.value);
    }
    return (
        <div id='divBot'>
            <section>
            <button className={`btn theme${theme}`} onClick={press} value='7' >7</button>
            <button className={`btn theme${theme}`} onClick={press} value='8' >8</button>
            <button className={`btn theme${theme}`} onClick={press} value='9' >9</button>
            <button id='del' className={`btn color${theme}`} onClick={() => erase()} >DEL</button>
            </section>
            <section>
            <button className={`btn theme${theme}`} onClick={press} value='4' >4</button>
            <button className={`btn theme${theme}`} onClick={press} value='5' >5</button>
            <button className={`btn theme${theme}`} onClick={press} value='6' >6</button>
            <button  className={`btn theme${theme}`} onClick={press} value='+'>+</button>
            </section>
            <section>
            <button className={`btn theme${theme}`} onClick={press} value='1'>1</button>
            <button className={`btn theme${theme}`} onClick={press} value='2'>2</button>
            <button className={`btn theme${theme}`} onClick={press} value='3'>3</button>
            <button  className={`btn theme${theme}`} onClick={press} value='-'>-</button>
            </section>
            <section>
            <button className={`btn theme${theme}`} onClick={press} value='.'>.</button>
            <button className={`btn theme${theme}`} onClick={press} value='0' >0</button>
            <button  className={`btn theme${theme}`} onClick={press} value='/'>/</button>
            <button  className={`btn theme${theme}`} onClick={press} value='*'>*</button>
            </section>
            <section id='secEq'>
            <button id='del' className={`btn btnEqual color${theme}`} onClick={()=> reset()}>RESET</button>
            <button className={`btn btnEqual colori${theme}`} onClick={()=> equal()}>=</button>
            </section>
        </div>
    )
}