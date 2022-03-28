import React, { useRef } from 'react';
import Shubh from './shubh';
import {categories,newSampleObj,nestedObj,todayArr,categoriesNames,categoriesArr} from '../../ob';

const  ShubhRef=()=>{
    const getRef=useRef(null);

    const handleIncShubh=()=>{
        getRef.current.handleInc()
        console.log('getRef',getRef);
    }

    const handleDecShubh=()=>{

    }
    // function particilar index should add given country to it and if index dosnt exist then return address not found.
    function addressFound(arr,index,country){
        let x='address not found';
        for(let i=0;i<arr.length;i++){
          if(i===index){
             arr[i]['address']={...arr[i]['address'],'country':country}
             console.log(arr[i]);
             return arr
          }
        }
        return x
      }
      console.log('addressArr',addressFound(categoriesArr,2,'germany'))
    return (
        <>
        <Shubh ref={getRef}/>
        <div>
        <button onClick={handleIncShubh}>Inc Shubh</button>
        <button onClick={handleDecShubh}>Dec Shubh</button>
        </div>
        </>
    )
}

export default ShubhRef;