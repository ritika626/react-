import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';

export const InputColor = ({onChange}) => {
    return(
        <div>
            <input type='text' placeholder='enter' onChange={onChange}/>
        </div>
    )
}

const BoxColorChange = () => {
    const [boxColor, setBoxColor] = useState("");

    const useStyles = makeStyles({
        container : {
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            padding:10,
            flexDirection: 'column'
           },
        box:{
            width : 150,
            height : 150,
            border : '1px solid black',
            backgroundColor: boxColor
        }
    })
    const classes = useStyles();

    const handleColorChange = (e) => {
        //  console.log("::::",e.target.value)
         setBoxColor(e.target.value);
    }

    return(
        <div className={classes.container}>
            <div className={classes.box}>
                    
            </div>
            <div>
                <InputColor onChange={handleColorChange}/>
            </div>
        </div>
    )
}

export default BoxColorChange;