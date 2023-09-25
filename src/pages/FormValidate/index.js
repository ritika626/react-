import React,{useEffect, useState} from 'react';

const FormValidate = () =>{

    const [inputValue,setInputValue] = useState({
        text:"",
        mobileNo:""
    });
    const [isValid,setIsValid] = useState(true);

    const pattern = new RegExp(/^[0-9\b]+$/);

    const handleInputChange = (e,key) =>{
        if(key === 'mobileNo' && pattern.test(e.target.value) || e.target.value === ''){
            setInputValue({...inputValue,[key] : e.target.value})
        }
        else if(key !== 'mobileNo'){
             setInputValue({...inputValue,[key] : e.target.value})
        }
    }

    useEffect(() =>{
        if(inputValue?.text && inputValue?.mobileNo?.length === 10){
            setIsValid(true);
        }
        else{
            setIsValid(false);
        }
    },[inputValue])

    console.log(inputValue);

    return(
        <>
        <input placeholder='text' type='text' onChange={(e) =>handleInputChange(e,'text')}></input>
        <input placeholder='mobile no.' type='text' value={inputValue.mobileNo} maxLength='10' onChange={(e) =>handleInputChange(e,'mobileNo')}></input>
        <button style={{background: isValid ? 'green' : 'red', color:'white'}}>Submit</button>
        </>
    )
}

export default FormValidate;