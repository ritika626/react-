import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../redux/actions';
import { useHistory } from 'react-router-dom'

const Contact=()=>{
    const dispatch= useDispatch();
    const history=useHistory();
    const numb=useSelector(state=>state.dr);
    const handleChange=()=>{
        let kiko=7;
        dispatch(setDate(kiko));
        history.goBack();
    }

    return(
       <>contact{numb.date}
       <button onClick={handleChange}>click</button>
       </> 
    )
}

export default Contact;