import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
     checkBox : {
          width : 20,
          height : 20
     }
});

const Checkbox = ({onChange, alreadyChecked}) => {
    const classes = useStyles();
    
    return(
       <input type='checkbox' className={classes.checkBox} onChange={onChange} checked={alreadyChecked}/>
    )
};

export default Checkbox;