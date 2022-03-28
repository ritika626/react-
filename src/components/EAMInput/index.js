import { makeStyles } from '@mui/styles';
import React from 'react';
import PropTypes from 'prop-types'

const useStyles = makeStyles({
    input1: {
        border: '1px solid blue',
        marginBottom: '20px',
        backgroundColor: 'white',
        padding: '10px'
    }
});

const EAMInput=({type='text',placeholder,value,onChange,...rest})=>{
    const classes = useStyles();

    return (
        <>
         <input className={classes.input1} type={type} value={value} placeholder={placeholder} onChange={(e)=>onChange(e.target.value)} {...rest}></input>
        </>
    )
}


EAMInput.propTypes = {
    type: PropTypes.oneOf(['text','password']),
  };

export default EAMInput;