import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Search, WoList } from '../redux/actions/woList';
import {ob} from '../ob';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';

const arr=[{name:'shubham',age:1},{name:'shreya',age:2},{name:'gitika',age:3},{name:'lila',age:4},{name:'lala',age:4},{name:'ritika',age:4}]

const useStyles=makeStyles({
    search:{
       padding:30
    },
    searchInput:{
        padding:3
    },
    searchButton:{
        padding:3
    },
    listItems:{
        padding:10,
        marginLeft:20
    }
})

const WorkOrderList=()=>{
    const classes=useStyles()
    const dispatch=useDispatch();
    const history=useHistory();
    const {location,state}=history;
    const [count,setCount]=useState(1);
    const [searchList,setSearchList]=useState([])
    const {list,search}=useSelector(state=>state.woList)

    useEffect(()=>{
        setSearchList(list)
    },[list])

    useEffect(()=>{
        dispatch(WoList(arr))
    },[]);

    const handleChange=(e)=>{
        dispatch(Search(e.target.value))
        if(e.target.value==''){
            // dispatch(WoList(arr))
            setSearchList(list)
            return ;
        }
        setSearchList(list.filter(i=>i.name===e.target.value))
        
    }
   
    const handleDetails=(age)=>{
        history.push(`${location.pathname}/details/${age}`,{'age':age})
    }

    // [1,2,3,3,4,5,9],[1,6,10,3,15,20,9] combine into one array

    let a=[1,2,3,3,4,5,9];
    let b=[1,6,10,3,15,20,9]

// expected output {
//     fruits:[],
//     vegetables:[],
//     spices:[]
// }

// [fruits,vegtables,spices]
 
/* function reorder(ob){
    let empArr=[];
    let empObj={};
      ob.map(i=>{
          if(i.type && !empArr.includes(i.type)){
              empArr.push(i.type)
          }
      })
      empArr.forEach(element => {
             let empData=[]
             ob.map(i=>{
                 if(i.type===element){
                     empData.push({id:i.id,name:i.name})
                 }})
              empObj[element]=empData;
      });
      return empObj;
}

console.log(reorder(ob)) */

// get first occurence;expected output

 /* function occurence(ob,key){
   return ob.find(i=>i.type===key)
}

console.log(occurence(ob,'spices')); 
 */

    // function arr(a,b){
    //     const emptyArr=a.concat(b)
        // const emptyArr=[...a,...b]
        // a.map((i)=>{
        //      emptyArr.push(i) 
        // })
        // b.map((i)=>{
        //     emptyArr.push(i)
        // })
        // return emptyArr;

        // for(let i=0;i<a.length;i++){
        //       b.push(a[i]);
        // }
        // return b
    // }
    // console.log(arr());

    // star pattern;

  /*   function patte(){
        let j=0
        for(let i=1;i<10;i++){
             j=ihandleSearch
    console.log('patte',patte()); */

 
  /*  const f=[];
   const v=[];
   const s=[];

   function arr3(a,key){
       let temp=[];
       a.map((i)=>{
           if(i.type===key){
              temp.push(i)
           }
       })
       return temp
   } */

  /*  function temo(a,b,c){
       let temp=[];
       temp=a.filter(i=>
         i.type===b
       ).map(i=>({...i,[c]:0}))
       return temp; */
    //    let temp=[];
    //     a.map(i=>{
    //         if(i.type===b){
    //            temp.push({...i,[c]:0})
    //         }
    //     })
    //     return temp
//    }

//    [{},{,price:0}]

//    console.log(temo(ob,'spices','price'))

  

//    console.log('arrr>>>>>>>', arr3(ob,'spices'))


    // remove duplicates values;
    // const arr=[1,1,4,5,6,7,8,3,3,6,6]
    // const emptyArr=[];
    // for(let i=0;i<arr.length;i++){
    //     if(!emptyArr.includes(arr[i])){
    //         emptyArr.push(arr[i])
    //     }
    // }

    // console.log(emptyArr);
//    const uniqueArray = arr.filter(function(item, pos) {
//        console.log(arr.indexOf(item) )
//         return arr.indexOf(item) == pos;
//     })

//  ['riti','lkdsklfl','bdbdcd'],[{name:'ll',age:8},{name:'hh',age:3},{name:'kk',age:3}]

    /*  function geti(arr,age){
         const fid = []
         arr.map((item)=>{
              if(item.age>=8){
                   fid.push(item)
              }
          })
          return fid
    }

     console.log(geti([{name:'ll',age:8},{name:'hh',age:3},{name:'kk',age:3}],8)) */

    // useEffect(()=>{
    //    setInterval(() => {
    //        setCount(count + 1);
    //    }, 1000);
    // })

    useEffect(()=>{
      return() => {
        dispatch(Search(''))}
    },[])

    return(
        <>
        {/* {count} */}
        <div className={classes.search}>
            <input type='text' value={search} className={classes.searchInput} onChange={handleChange}></input>
            {/* <button className={classes.searchButton} onClick={handleSearch}>search</button> */}
        </div>
        <div>
        <div className={classes.listItems}>
        <ul>
            {searchList?.map((i,key)=>{
               return (
                <li key={key} onClick={()=>handleDetails(i.age)}>{i.name}
                </li>
               )
            })}
            </ul>
        </div>
        </div>
        </>
    )
}

export default WorkOrderList;