import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    formBox: {
        width: '100%',
    }
});

// const ageArr=new Array(5).fill('hello');
const ageArray = [18, 19, 20, 21, 22];
const genderObj = {
    FEMALE: 'female',
    MALE: 'male'
}
// console.log(ageArray);

const CustomForm = () => {
    const classes = useStyles();
    const [values, setValues] = useState({
        search: 'ritika',
        gender: 'male',
        age: '19',
        hobbies: ['I have a Activa','Singing'],
    })

    const handleSelect = (e,key) => {
        if(key==='hobbies'){
            let empArr=values.hobbies;
            if(e.target.checked){
                empArr.push(e.target.value)
            }else{
               empArr = empArr.filter(i=> i !== e.target.value)
            }
            setValues({
                ...values,
                'hobbies':empArr,
            })
            return
        }
        setValues({
            ...values,
            [key]:e.target.value,
        })
    }

    console.log('values',values);

    const handleSubmit = () => {

    }
    // input text,radio button-male,female,dropdown -select above 18 , submit button , hobbies checkBox
    return (
        <div className={classes.formBox}>
            <input type='text' onChange={(e) => handleSelect(e,'search')} value={values.search} placeholder='search'></input>
            <div onChange={(e) => handleSelect(e,'gender')}>
                <input type='radio' name="gender" checked={values.gender==='female'} value="female"></input>
                <label htmlFor="html">Female</label><br></br>
                <input type='radio' name="gender" checked={values.gender==='male'} value="male"></input>
                <label htmlFor="html">Male</label><br></br>
            </div>
            <div>
                <select value={values.age} onChange={(e) => handleSelect(e,'age')}>
                    {
                        ageArray.map(i => (<option value={i}>{i}</option>))
                    }
                </select>
            </div>
            <div>
                <span>hobbies
                    <div onChange={(e) => handleSelect(e,'hobbies')}>
                        <div>
                            <input type="checkbox"  id="vehicle1" name="vehicle1" checked={values.hobbies.includes('Singing')} value='Singing' />
                            <label htmlFor="vehicle1"> Singing</label><br />
                        </div>
                        <div>
                            <input type="checkbox" id="vehicle1" name="vehicle1"  checked={values.hobbies.includes('I have a Activa')} value='I have a Activa' />
                            <label htmlFor="vehicle1"> I have a Activa</label><br />
                        </div>
                        <div>
                            <input type="checkbox" id="vehicle1" name="vehicle1" checked={values.hobbies.includes('Dhumka by Shubham')} value='Dhumka by Shubham' />
                            <label htmlFor="vehicle1"> Dhumka by Shubham</label><br />
                        </div>
                    </div>
                </span>
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default CustomForm;