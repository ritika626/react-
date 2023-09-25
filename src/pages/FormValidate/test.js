import React, { useEffect, useState } from 'react';

const Test = () =>{

    const [hours,setHours] =useState(new Date().getHours());
    const [minutes,setMinutes] =useState(new Date().getMinutes());
    const [seconds,setSeconds] =useState(new Date().getSeconds());

    // function updateMinutes(){
    //      setInterval(()=>{
    //           setMinutes(minutes + 1);
    //      },60000);
    // }

    function updateSeconds(){
        setInterval(() => {
           setSeconds((prevSeconds) =>{
            if(prevSeconds === 60){
               return 0
            }
            else{
               return prevSeconds + 1
            }
           });
        },1000);
        
    }

    useEffect(() =>{
        updateSeconds()
    },[]);

    return(
        <>
        <h4>hours:{hours}</h4>
        <h4>minutes:{minutes}</h4>
        <h5>seconds:{seconds}</h5>
        {/* <button>Start</button> */}
        </>
    )
}

export default Test;