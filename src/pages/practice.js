import React,{useState} from 'react';
import { makeStyles } from '@mui/styles';

const todayArr=['#D84C63','#FF5733','#5F413B','#30BA36','#308EBA','#901CA5','#5F3F45','#28CFA4','#88CF28']
const na=['a','b','c','d','e','f','g']

const Practice=()=>{
    const [boxColor,setBoxColor]=useState({});
    const useStyle=makeStyles({
        box:{
            display:'flex',
            flexWrap:'wrap',
            // justifyContent:'space-between',
            alignItems:'center',
            textAlign:'center',
        },
        subBox:{
            border:'1px solid black',
            width:'20%',
            padding:20
        },
        a:{
            backgroundColor:boxColor.a,
            color:'white',
        },
        b:{
            backgroundColor:boxColor.b,
            color:'white',
        },
        c:{
            backgroundColor:boxColor.c,
            color:'white',
        },
        d:{
            backgroundColor:boxColor.d,
            color:'white',
        }
     })
    const classes=useStyle();


    const handleChangeColor=(i)=>{
        const a=Math.floor(Math.random() * todayArr.length);
        setBoxColor({...boxColor,[i]:todayArr[a]});
    }

    return (
        <div className={classes.box}>
            {
               na?.map((i,index)=>{
                //    return <div className={`${classes.subBox} ${boxColor?.[i]?classes?.[i]:''} `} onClick={()=>handleChangeColor(i)} key={index}>{i}</div>
                  return <div className={`${classes.subBox} `} style={{backgroundColor:boxColor?.[i]}} onClick={()=>handleChangeColor(i)} key={index}>{i}</div>
               })
            }
        </div>
    )
}

export default Practice;