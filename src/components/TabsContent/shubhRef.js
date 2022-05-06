import React, { useRef } from 'react';
import Shubh from './shubh';
import {categories,newSampleObj,nestedObj,todayArr,categoriesNames,categoriesArr,tags} from '../../ob';



const  ShubhRef=()=>{
    const getRef=useRef(null);

    const handleIncShubh=()=>{
        getRef.current.handleInc()
        console.log('getRef',getRef);
    }

    const handleDecShubh=()=>{

    }
    // function particilar index should add given country to it and if index dosnt exist then return address not found.
    /* function addressFound(arr,index,country){
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
      console.log('addressArr',addressFound(categoriesArr,2,'germany')) */

      
      function fromTags(tig){
           const y= tig?.map(i=>{
               const tag=tags?.find(o=>o.id===i)
               return tag.name
            })
            return y?.join(', ')
      }

      const this1=()=>{
        console.log('this fat arrow',this);
      }
      function this2(){
        console.log('normal function this',this);
      }

    return (
        <>
        <Shubh ref={getRef}/>
        <div>
        <button onClick={this1}>Inc Shubh</button>
        <button onClick={this2}>Dec Shubh</button>
        </div>
        <div>
          <ul>
            {
              categoriesArr.map((i,index)=>{
                return (<li key={index}>
                  {i.name}{fromTags(i.tags)}
                </li>)
              })
            }
          </ul>
        </div>
        </>
    )
}

export default ShubhRef;