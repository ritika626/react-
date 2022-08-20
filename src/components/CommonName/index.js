import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const CommonName=()=>{
    const location = useLocation();
    const selectedName=location.pathname.split("/")
    const name=selectedName[selectedName.length-1];
    
    return (
        <>{name}</>
    )
}

export default CommonName;