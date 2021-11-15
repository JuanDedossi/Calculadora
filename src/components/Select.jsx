import React from 'react'


export function Select({theme, tema}){
    return (
        <div id='divSelect'>
            <p className={`themep${theme}`}>calc</p>
            <section id='sectionSele'>
                <article id='artLab'>
            <label className={`themep${theme}`} htmlFor='1'>1</label>
            <label className={`themep${theme}`} htmlFor='2'>2</label> 
            <label className={`themep${theme}`} htmlFor='3'>3</label>
                </article>
                <article id='artSel'>
            <input type='radio' id='1' name='select' value='1' onClick={(e) => tema(e.target.value)}></input>
            <input type='radio' id='2' name='select' value='2' onClick={(e) => tema(e.target.value)}></input>
            <input type='radio' id='3' name='select' value='3' onClick={(e) => tema(e.target.value)}></input>
            </article>
            </section>
        </div>
    )
}