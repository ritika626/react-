import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import EAMInput from '../components/EAMInput';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    box: {
        width: '300px',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    input: {
        border: '1px solid grey',
        padding: '20px',
    },
    input1: {
        border: '1px solid blue',
        marginBottom: '20px',
        backgroundColor: 'white',
        padding: '10px'
    }
});

const LoginPage = () => {
    const classes = useStyles();
    const history=useHistory();
    const{location}=history;
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        input:''
    });

    console.log('history',history,location);

    const handleSubmit = () => {
        localStorage.setItem('token','shubham');
        // history.replace(location.state.pathname)
        history.replace(location.state.from.pathname);
    }

    const handleInput = (key, e) => {
        setFormData({
            ...formData,
            [key]: e,
        });
    }

    return (
        <div className={classes.box}>
            <div className={classes.input}>
                {/* <input className={classes.input1} value={formData.username} onChange={(e) => handleInput('username', e)} type='text' placeholder='username'></input>
                <input className={classes.input1} value={formData.password} onChange={(e) => handleInput('password', e)} type='password' placeholder='password'></input> */}
                <EAMInput placeholder='custom Input' type='text' onChange={(e) => handleInput('input', e)} value={formData.input}/>
                <Button onClick={handleSubmit}>LOGIN</Button>
            </div>
        </div>
    )
}

export default LoginPage;