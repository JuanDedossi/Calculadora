import React from 'react';
import { Select } from './components/Select';
import { InputC } from './components/InputC';
import './app.css';


export default function App(){
    const [theme,settheme] = React.useState(1);
    function tema(val){
        switch(val){
            case '2': {
                document.querySelector('body').style.backgroundColor = '#29324F';
                settheme(prev => 2);
                 break;}
            case '3': {
                document.querySelector('body').style.backgroundColor = '#E0E0E0';
                settheme(prev => 3);
                 break;}
            default: {
                settheme(prev => 1);
                document.querySelector('body').style.backgroundColor = '#190124';
            } 
        }
    }
   return (
       <div className='contenedor'>
           <Select tema={tema} theme={theme}/>
           <InputC theme={theme}/>
       </div>
   )
} 