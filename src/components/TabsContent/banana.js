import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { categories, ob ,ob1,ob2} from '../../ob';

const useStyles = makeStyles({
    digitalClock:{
        border:'1px solid black',
        padding:5,
        margin:6,
        textAlign:'center',
    },
    clock:{
        padding:'6px 13px',
        border:'1px solid grey',
        display:'inline-block'
    }
})

const Banana = () => {
    const history = useHistory();
    const { location } = history;
    const params = useParams();
    const classes = useStyles();
    const [hours,setHours]=useState(new Date().getHours());
    const [minutes,setMinutes]=useState(new Date().getMinutes());
    const [seconds,setSeconds]=useState(new Date().getSeconds());
    const [clock,setClock]=useState();
   /*  expected output {banana:'like',bhindi:'dislike'}
    function likes(arr) {
        let empOb = {};
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].actionFlag) {
                empOb[arr[i]['name']]= 'like'
            }
            else {
                empOb[arr[i]['name']] = 'dislike'
            }
        }
        console.log('empOb??????>>>>',empOb);
    }
    likes(ob) */

    useEffect(()=>{
         /* let clearIterval = setInterval(()=>{
             let newDate= new Date();
             setHours(newDate.getHours());
             setMinutes(newDate.getMinutes());
             setSeconds(newDate.getSeconds())
         },1000)
         return ()=>{clearInterval(clearIterval)} */

         /* setInterval(()=>{
            setSeconds((seconds)=>seconds+1)
         },1000) */
        
         /* setInterval(()=>{
             let date=new Date()
             setClock(date.toLocaleTimeString())
         },1000) */

    },[])

    /* useEffect(()=>{
        if(seconds>59){
            setMinutes((minutes)=>minutes+1)
            setSeconds(0)
        }
    },[seconds])

    useEffect(()=>{
        if(minutes>59){
            setHours(hours=>hours+1)
            setMinutes(0)
        }
    },[minutes]) */

   /*  function format(time){
      if(time<10){
          return '0' + time
      }
      return time
    } */

    // take out the same from two objects;

   const getCategoryName=(b)=>{
          const arr= categories.find(a=>a.id===b)
         return arr?.name
     }

    //  take id and remove that object from array
        
   /*  function idRemove(id){
       return ob2.filter(i=>{
              return  i.id !== id 
           })
    }

    console.log('removeId',idRemove(4)) */

    function idRemove(id){
        /* let deleteIndex=null;
       ob2.map((i,index)=>{
             if(i.id===id){
                 deleteIndex=index
             }
         })
        if(deleteIndex){
            ob2.splice(deleteIndex,1)
        }
        return ob2 */

        const c=ob2.findIndex(i=>i.id===id)
        if(c){
            ob2.splice(c,1)
        }
        return ob2
    }

    console.log('idRemove',idRemove(4))
    
    return (
          <div className={classes.digitalClock}>
              <div><b>Digital Clock</b></div>
              <p className={classes.clock}>{hours} : {minutes} : {seconds}</p>
              {
                 ob2.map((i,index)=>{
                    return <div key={index}>{i.name} -{getCategoryName(i.categoryId)} </div>
                 })
              }
              {/* <p className={classes.clock}>{clock}</p> */}
          </div>
    )
}

export default Banana;