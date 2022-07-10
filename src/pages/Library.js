import React from 'react';
import { makeStyles } from '@mui/styles'
import { Button, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';

const useStyle = makeStyles({
    box:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center',
        '& > div':{
            margin:5,
            padding:3,
            width:400
        }
    },
    input:{
        display:'flex',
        flexDirection:'column',
        '& > TextField':{
            margin:5
        }
    }
});

const Library = () => {
    const classes = useStyle();

    return (
        <div className={classes.box}>
            <div>
            <h3>Sign In</h3>
            </div>
            <div className={classes.input}>
            <TextField id="outlined-basic" margin="dense" label="Email Address" variant="outlined" />
            <TextField id="outlined-basic" margin="dense" label="Password" variant="outlined" />
            </div>
            <div>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
            </FormGroup>
            </div>
            <div>
            <Button variant="contained" fullWidth>Sign In </Button>
            </div>
        </div>
    )
}

export default Library;