import { Button } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useSelector } from 'react-redux';



const Navbar = () => {
    
    const history = useHistory();
    const { pathname } = useLocation();
    const { backgroundColor } = useSelector(state=>state.backgroundChangeRedux)

    console.log(backgroundColor);

    const logoutButton = () => {
        localStorage.removeItem('token');
        history.replace('/');
    }

    const useStyles = makeStyles({
        navbar: {
            background: backgroundColor || '#ffffff',
            borderBottom: '1px solid #31899d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            position: 'sticky',
            top: 0,
            left: 0,
            zIndex: 2
        },
        menu: {
            listStyle: 'none',
        },
        menuItem: {
            color: 'white ',
            background: 'seagreen',
            marginRight: '10px',
            display: 'inline-block',
            padding: '10px 15px',
        },
        link: {
            color: 'white',
            textDecoration: 'none'
        },
        // active: {
        //     backgroundColor: 'yellow'
        // },
        testColor: {
            color: 'black',
        }
    })

    const classes = useStyles();
    return (
        <div className={classes.navbar}>
            <ul className={classes.menu}>
                <li className={`${classes.menuItem} `} ><NavLink activeClassName={classes.testColor} className={classes.link} to='/about'>About</NavLink></li>
                <li className={`${classes.menuItem} `} ><NavLink activeClassName={classes.testColor} className={classes.link} to='/contact'>Contact</NavLink></li>
                <li className={`${classes.menuItem} `}><NavLink activeClassName={classes.testColor} exact className={classes.link} to='/' >docs</NavLink></li>
                {/* from routes methods */}
                {/* <li className={`${classes.menuItem} ${pathname==='/about'? classes.active:''}`} ><Link className={classes.link} to='about'>About</Link></li>
                    <li className={`${classes.menuItem} ${pathname==='/contact'? classes.active:''}`} ><Link  className={classes.link} to='contact'>Contact</Link></li>
                    <li className={`${classes.menuItem} ${pathname==='/'? classes.active:''}`}><Link className={classes.link} to='/' >docs</Link></li> */}
                <Button onClick={logoutButton}>Logout</Button>
            </ul>
        </div>
    )
}

export default Navbar;