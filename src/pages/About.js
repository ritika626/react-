import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setDate } from '../redux/actions';

const About=()=>{
    const dispatch=useDispatch();
    const history=useHistory();
    const  test=useSelector(state=>state.dr);
    console.log(test);

    const handleClick=(num)=>{
        console.log(num);
        dispatch(setDate(num));
        history.push('/',{
           value:num
       })
    }

   const sample={
       a:"ritika",
       b:"shubham"
   }

    Object.keys(sample).forEach((element) => {
        console.log('kiko',element,sample[element]);
    });

    for (const iterator of Object.keys(sample)) {
        /* if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
        } */
        console.log('key',iterator)
    }

    const dates=[1,2,3,4,5,6,7,8]
    return(
       <>about
       <div className='boxWrapper'>
           {
               dates.map((x,index)=>{
                return <div className={`box ${test?.date== x ?'active':''}`}  onClick={()=>handleClick(x)} key={index}>{x}</div>
               })
           }
       </div>
       </> 
    )
}

export default About;