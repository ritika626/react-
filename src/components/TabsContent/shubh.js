import React, { useMemo, useState } from 'react'
import {categories,newSampleObj,nestedObj,todayArr,categoriesNames,categoriesArr} from '../../ob';
import moment from 'moment';

const Shubh=()=>{
    const [count,setCount]=useState(0);

    const handleInc=()=>{
         setCount(count+1)
    }

    const handleDec=()=>{
        setCount(count-1)
    }
    
    // actionFlag true ones object should be in array
    /* ===============>>>>>>function bringOnly(a){
       return a.filter(i=>i.actionFlag)
    }
    console.log(bringOnly(categories)); */
    // ===============>>>>>>..function return sum of values for obj and array
    // function sumOfValues(a){
    //     // let b=0
    //     //   Object.keys(a).map(i=>{
    //     //       b+=a[i]
    //     //   })
    //     //   return b
    //   let b=   Object.values(a).reduce((pre,acc)=>{
    //       return pre+=acc
    //         // acc+=a[i]
    //     })
    //     return b
    // }
    //   console.log('sampleobj',sumOfValues(newSampleObj));
   // ================>>>.function return current date format 13 March / 2022 (13:48) 
   function mukka(){
    //    let date=new Date();
    //    let month=date.getMonth();
    //    let day=date.getDate();
    //    let time=date.getHours() +":" + date.getMinutes();
    //    let year=date.getFullYear()
    //    let months=['jan','Feb','March','April']
    //    return day +" " + months[month] + " / " + year + "(" + time + ")"
        return moment().format(' Do MMMM / YYYY, h:mm:ss a');
   }
   console.log(mukka());

  /* ===========> function convert to f from c
      function cToF(c){
          let f=(c*9/5)+32
        return f.toFixed(2);
      }
      console.log('ctof',Number(cToF(30.3))) */

      /*========> function capital(a){
          const b=a.map(i=>{
             return {...i,type:i.type?.toUpperCase()}
          })
          return b
      }
      console.log('capitalise',capital(categories)); */

      function convertArrToObj(b,c,d){
          let ob={}
         b.map(i=>{
               ob[i[c]]=i[d]
          })
        return ob
      }
    //   let name="name";
    //   let type="type";
      console.log('convertArrToObj',convertArrToObj(categories,'type','type'))

    //   Capitalise text
    /* ========>function capitalise(a){
      let ob={};
      a.map(i=>{
        let cap=i.name.split('')
        cap[0] = cap[0].toUpperCase()
        ob[i.name]=cap.join("")
      })       
      return ob 
    }
    console.log('capitalise',capitalise(categories)) */
    // from id return type wrt to id
    //=======> function retType(a,b){
      //1.let ob={}
      // let x = a.filter(i=>i.id === b
      // )
      // ob['type']=x[0].type
      // return x[0].type
      //2. let x=a.find(i=>i.id===b)
      // return x.type
      //3.let x=''
      // a.map(i=>{
      //   if(i.id===b){
      //      x=i.type
      //   }
      // })
      // console.log(x);
    // }
    // console.log('retType',retType(categories,2))
    // =============>function values greater than 50 for them put keys in arr
    /* function keyArr(o){
       let x=Object.keys(o).filter(i=>o[i]>50)
       console.log(x)
    }
    console.log('keyArr=====.',keyArr(newSampleObj))
 */ 
  // function calculate all the values sum from obj
  function calAll(o){
      //  Object.keys(o).map(i=>)
      // for (const [key, value] of Object.entries(o)) {
      //   console.log(`${key}: ${value}`);
      // }
      let x=0
      Object.keys(o).map(i=>{
       let y = Object.values(o[i]).reduce((prev,acc)=>prev+=acc);
         x+=y
      })
     return x
  }
  console.log('calAll',calAll(nestedObj))
  // function return the count of the number
  function countNum(a,b){
      let count=[]
      let x=a.filter(i=>i===b)
      // for(let i=0;i<a.length;i++){
      //   if(a[i]===b){
      //      count.push(a[i])
      //   }
      // }
      // return count.length
      return x.length
  }
  console.log('countNum',countNum(todayArr,2));

  // function return [{value:'fruits'}]
  function catVal(a){
    let x=[];
    let b=a.map(i=>{
      console.log(i?.type);
      // if(categoriesNames[i?.type])
      // console.log(categoriesNames[i?.type])
      return {...i,value:categoriesNames[i?.type]}
    })
    console.log(b);
  }
  console.log('bdbafjhdf',catVal(categoriesArr));

  // function next non-consecutive no. [1,2,3,5,6,7,9], return [4,8]
    function nonConsecutive(a){
      let x=[];
       /* for(let i=0;i<a.length-1;i++){
         console.log('kkkkkkkkk',a[i+1],a[i]+1)
         if(a[i+1]!==a[i]+1){
             x.push(a[i]+1)
         }
       }
       return x */
       for(let i=0;i<a.length-1;i++){
         if(a[i+1]-a[i]!== 1){
           x.push(a[i]+1)
         }
       }
       return x
    }
    console.log('non consecutive',nonConsecutive([1,2,3,5,6,7,9]))

    // function reverse the list  or array of objects
    function reverseArr(a){
      let x=[]
      for (let i=a.length-1;i>=0;i--){
          console.log('hydgdyfyufd',a[i]);
          x.push(a[i])
      }
      // return a.reverse();
      return x
    }
    console.log('reverseArr',reverseArr(categoriesArr));
    console.log('use memo');

     const test=useMemo(()=>{
       console.log('test')
        return 'test'
     },[count])    
    return (
        <>
        <h3>{count} {test}</h3>
        <button onClick={handleInc}>Inc</button>
        <button onClick={handleDec}>Dec</button>
        </>
    )
}

export default Shubh;