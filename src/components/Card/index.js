import React from 'react';
import { makeStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';

const Card = ({ color , name ,country ,age ,handleDelete}) => {
    const useStyle = makeStyles({
        card: {
            background: color || 'white',
            border:'1px solid black',
            color:'black',
            padding:5,
            margin:10,
            position:'relative'
        },
        DeleteIcon:{
            top:0,
            right:10,
            position:'absolute'
        }
    });
    const classes = useStyle();

    return (
        <div className={classes.card}>
            {/* <div className={classes.DeleteIcon}>
            <DeleteIcon />
            </div> */}
            <div>Name:&nbsp; {name}
            <div className={classes.DeleteIcon} onClick={handleDelete}>
            <DeleteIcon />
            </div>
            </div>
            <p>Age:&nbsp; {age}</p>
            <p>Country:&nbsp; {country}</p>
        </div>
    )
}
export default Card;