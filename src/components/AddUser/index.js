import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Box from '../Box/Index';

//name,lastname,age(dropdown),country(dropdown),mobile no

const arr=[17,18,19,20,21,22]

const useStyle = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center',
        /*  top: '30%',
         position: 'absolute',
         left: '35%', */
        alignItems: 'center',
        height: 'calc(100vh - 74.58px)',
        
    },
    box: {
        width: 300,
        background: 'black',
        color: 'white',
        padding: 30,
        borderRadius: 5,
        maxHeight:'calc(100vh - 200px)',
        '&:nth-child(2)':{
            overflow:'auto',
        },
        '& > div': {
            margin: 5
        },
        margin: 10
    },
    input: {
        display: 'flex',
        flexDirection: 'column',
        '& > input': {
            padding: 5,
            marginTop: 3
        }
    },
    dropdown: {
        display: 'flex',
        flexDirection: 'column',
        '& > select': {
            padding: 5,
            marginTop: 3
        },
        '& > div':{
            display:'flex',
            justifyContent:'space-evenly',
            marginTop: 3
        }
    },
    submitButton: {
        textAlign: 'end',
        '& > button': {
            padding: 5,
            marginTop: '5%'
        }
    },
    card:{
        background:'white',
        color:'black',
        padding:5
    }
})

const AddUser = ({handleSubmit}) => {
    const classes = useStyle();
    
    const [form, setForm] = useState({
        name: '',
        lastName: '',
        age: '',
        country: '',
        mobileNo: '',
        gender:''
    })

    const handleInput = (key) => (e) => {
        setForm({...form,[key]:e.target.value});
    }

    const userSubmit=()=>{
        handleSubmit({...form,id:new Date().getTime()})
         setForm({
        name: '',
        lastName: '',
        age: '',
        country: '',
        mobileNo: '',
        gender:''
    })
    }

    return (
        <>
            {/* <div className={classes.box}> */}
                <Box>
                <div className={classes.input} >
                    <label>Name</label>
                    <input type='text' value={form.name} onChange={handleInput('name')}></input>
                </div>
                <div className={classes.input}>
                    <label>Lastname</label>
                    <input type='text' onChange={handleInput('lastName')}></input>
                </div>
                <div className={classes.dropdown}>
                    <label>Gender</label>
                    <div onChange={handleInput('gender')}>
                            <input type='radio' value='Male' name='gender'></input>
                            <label>Male</label>
                            <input type='radio' value='Female' name='gender'></input>
                            <label>Female</label>
                    </div>
                </div>
                <div className={classes.dropdown}>
                    <label>Age</label>
                    <select onChange={handleInput('age')} value={form.age}>
                        {
                            arr.map((i,index)=>{
                               return <option value={i}>{i}</option>
                            })
                        }
                    </select>
                </div>
                <div className={classes.dropdown}>
                    <label>Country</label>
                    <select onChange={handleInput('country')}>
                        <option value="volvo">Volvo</option>
                        <option value="volvo">car</option>
                    </select>
                </div>
                <div className={classes.input}>
                    <label>Mobile No.</label>
                    <input type='text' onChange={handleInput('mobileNo')}></input>
                </div>
                <div className={classes.submitButton} >
                    <button onClick={userSubmit}>Submit</button>
                </div>
            {/* </div> */}
            </Box>
           {/*  <div className={classes.box}>
                <pre>
                <code>
                    {
                        JSON.stringify(user)
                    }
                  </code>
                </pre>
                {user.map((i,index)=>{
                        return <div className={classes.card}>
                              <div>
                                {i.name}
                              </div>
                              <div>
                                {i.age}
                              </div>
                        </div>
                      })}
                
            </div> */}
            </>
    )
}

export default AddUser;