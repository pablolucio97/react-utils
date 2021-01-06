import React, {useState, useEffect} from 'react';
import './styles.css'

import {BiTimer} from 'react-icons/bi'

function CountdownCard() {

    const [hours, setHours] =  useState(1)
    const [minutes, setMinutes] =  useState(2)
    const [seconds, setSeconds] =  useState(40)

    useEffect(() => {
        const timer = setInterval( () => {

            setSeconds(seconds - 1)
     
            if(seconds < 1 && minutes > 0 ){
                setSeconds(59)
                setMinutes(minutes -1)
            }
             if(minutes < 1 && hours > 0){
                setHours(hours -1 )
                setMinutes(59)
            }
               
            if(hours < 1){
                setHours(0)
             }

             if(seconds < 1 )
            

            if(hours < 1 && minutes < 1 && seconds < 1){
                setHours(0)
                setMinutes(0)
                setSeconds(0)
            }

           
        }, 1)
        return () => clearInterval(timer)
    }, [seconds])

  return(
      <div className='card-container'>
          <div className="title-container">
            <h3>{
                hours<1 && minutes<1 && seconds<1 ? 'OFERTA ENCERRADA.': 'OFERTA EXPIRA EM:'
                }</h3>
          </div>
        <div className="timer-container">
          <BiTimer size={48}/>
          <h1>
          {hours < 10 && hours > -1 ? '0' : ''} 
          {hours}:
          {minutes < 10 && minutes > -1 ? '0' : ''}
          {minutes}:  
          {seconds < 10 && seconds > -1 ? '0' : ''}
          {seconds}</h1>
        </div>
      </div>
  );
}

export default CountdownCard;