import { TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import actions from '../redux/actions/backgroundChange';

const Settings = () => {
    const dispatch=useDispatch();

    const handleChange=(e)=>{
         //console.log(e.target.value);
         dispatch(actions.backgroundChangeHeader.request(e.target.value))
    }

    return (
            <div>
                <TextField onChange={(e)=>handleChange(e)}/>
            </div>
    )
}
export default Settings;