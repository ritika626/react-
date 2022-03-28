import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import {ob , normalOb ,normalOb1} from '../../ob';

const useStyles=makeStyles({
    box:{
      height:400,
      margin:70,
      width:400,
      marginLeft:'auto',
      marginRight:'auto'
    },
    mainBox:{
      display:'flex'
    },
    subBox:{
        padding:10,
        border:'1px solid black',
        margin:0.5,
        width:'100%',
        height:'15vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    disable:{
        pointerEvents:'none'
    }
})

const PLAYERS={
    Player1:'x',
    Player2:'0'
}

const Bhindi=()=>{
    const classes=useStyles();
    const [selectBox,setSelectBox]=useState();
    const [currentPlayer,setCurrentPLayer]=useState(PLAYERS.Player1);

    // matrix 2d array;
    const arr1=[['','',''],['','',''],['','','']]

    const [arr,setArr]=useState(arr1);

    const handleClick=(rowId,colId)=>{
        let newArr=[...arr]
        if(currentPlayer===PLAYERS.Player1){
            // setCurrentPLayer(PLAYERS.Player2)
            newArr[rowId][colId]='x'
        }
        else{
            // setCurrentPLayer(PLAYERS.Player2)
            newArr[rowId][colId]='0'
        }
        setArr(newArr)
        setCurrentPLayer(currentPlayer===PLAYERS.Player1?PLAYERS.Player2:PLAYERS.Player1)
    }

    useEffect(()=>{
        if((arr[0][0]==='x' && arr[1][1]==='x' && arr[2][2]==='x') || (arr[0][0]==='0' && arr[1][1]==='0' && arr[2][2]==='0')){
            alert('djfufh')
            setArr(arr1)
        }
        if((arr[0][2]==='x' && arr[1][1]==='x' && arr[2][0]==='x') || (arr[0][2]==='0' && arr[1][1]==='0' && arr[2][0]==='0')){
            alert('djfufh')
        }
        if((arr[0][0]==='x' && arr[0][1]==='x' && arr[0][2]==='x') || (arr[0][0]==='0' && arr[0][1]==='0' && arr[0][2]==='0')){
            alert('djfufh')
        }
        if((arr[1][0]==='x' && arr[1][1]==='x' && arr[1][2]==='x') || (arr[1][0]==='0' && arr[1][1]==='0' && arr[1][2]==='0')){
            alert('djfufh')
        }
        if((arr[2][0]==='x' && arr[2][1]==='x' && arr[2][2]==='x') || (arr[2][0]==='0' && arr[2][1]==='0' && arr[2][2]==='0')){
            alert('djfufh')
        }
        if((arr[0][0]==='x' && arr[1][0]==='x' && arr[2][0]==='x') || (arr[0][0]==='0' && arr[1][0]==='0' && arr[2][0]==='0')){
            alert('djfufh')
        }
        if((arr[0][1]==='x' && arr[1][1]==='x' && arr[2][1]==='x') || (arr[0][1]==='0' && arr[1][1]==='0' && arr[2][1]==='0')){
            alert('djfufh')
        }
        if((arr[0][2]==='x' && arr[1][2]==='x' && arr[2][2]==='x') || (arr[0][2]==='0' && arr[1][2]==='0' && arr[2][2]==='0')){
            alert('djfufh')
        }
        console.log(arr[0][0] + arr[1][1] + arr[2][2])
    },[arr])

    // take arr and copy its value  in object with a key
    /* function normalObj(a){
        a.map(i=>{
            i['normalObKey']=normalOb
        })
        return a;
    }
    console.log('normalOb Key>>>>>????',normalObj(ob)); */

    // concat two objects
    /* function joinObj(a,b){
        let newObk={...a,...b}
        return newObk
    }
    console.log('normalOb>>>>>????',joinObj(normalOb1,normalOb)) */

    // delete key from function in object
   /*  function deleteKey(a,key){
          delete a[key]
         return a
    }
    console.log('jbbfjsfujig>>>>>',deleteKey(normalOb1,'name'));
 */

    // fucntion delete key wtr passed id
      function deleteKeyArr(arr,id){
         /* return arr.filter(i=>{
               return i.id !== id
          }) */
         let index=  arr.findIndex(i=>i.id===id)
         arr.splice(index,1)
        return arr
      }
      console.log('jbbfjsfujig>>>>>',deleteKeyArr(ob,4))

    return (
       <div className={classes.box}>
           {
               arr.map((row,rowIndex)=>{
                return (<div className={classes.mainBox} key={rowIndex}>
                    {row.map((col,index)=>{
                        return <div className={`${classes.subBox} ${col!==''?classes.disable:''}`}key={index} onClick={()=>handleClick(rowIndex,index)}>{col}</div>
                    })}
                </div>)
               })
           }
       </div>
    )
}

export default Bhindi;