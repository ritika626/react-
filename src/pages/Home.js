import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home=()=>{
    const history=useHistory();
    const { state }=useLocation();
    // console.log('history in docs',location);
    return(
       <>
       {state?.value}
       </> 
    )
}

export default Home;