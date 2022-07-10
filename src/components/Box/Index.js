import React from 'react';
import { makeStyles } from '@mui/styles';

const Box = ({ color , children}) => {
    const useStyle = makeStyles({
        box: {
            width: 400,
            height: 400,
            background: color || 'black',
            margin:5,
            color:'white',
            padding:10,
            overflow:'auto'
        }
    });
    const classes = useStyle();

    return (
        <div className={classes.box}>
            {children}
        </div>
    )
}
export default Box;