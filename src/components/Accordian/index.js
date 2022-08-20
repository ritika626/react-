import React, { useState } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import AddIcon from '@mui/icons-material/Add';

const useStyle = makeStyles({
   
    sec1: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        background: 'black',
        color: 'white',
        flex: 1,
    },
    sec2: {
        background: 'lightgrey',
        padding: 10,
    },
    ani: {
        display: 'none',
        height: 0,
    },
    ani2: {
        display: 'block',
        height: 'auto',
        transition: '0.4s ease-out height'
    }
})

const Accordian = ({title,content, ind}) => {
    console.log('ind',ind);
    const classes = useStyle();
    const [open, showOpen] = useState(ind)

    const handleClick = () => {
        showOpen(!open)
    }

    return (
        <div className={classes.accordianWrap}>
            <div className={classes.sec1} onClick={handleClick}>
                {title}
                <AddIcon />
            </div>
            <div className={`${classes.ani} ${open ? classes.ani2 : ''}`}>
                {
                    <div className={classes.sec2}>
                        {content}
                    </div>
                }
            </div>


        </div>
    )
}
export default Accordian;