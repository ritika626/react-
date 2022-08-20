import React from 'react';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles({
    leftSideNav: {
        width: 30,
        border: '1px solid black',
        height: 'calc(100vh - 76.58px)',
        position: 'relative',
        transition: '0.7s ease-in width'
    },
    menuIcon: {
        textAlign: 'right'
    },
    openMenu: {
        width: 200,
    },
    iconContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    submenu:{
        transition: 'max-height 0.4s ease-out'
    },
    subMenuItem:{
        textAlign:'center',
    },
    listItem:{
        width:'100%'
    }
});

const LayoutLeft = ({ arr }) => {
    const classes = useStyle();
    const history=useHistory();
    const [open, showOpen] = useState(true);
    const [subMenu, setSubmenu] = useState({
        id:'',
        show:false
    });

    const handleMenuIcon = () => {
        showOpen(!open)
    }

    const handleSubMenus = (id,bool) => {
        setSubmenu({'id':id,'show':!bool})
    }

    const handleNameChange=(nam)=>{
        history.push(`/layoutNav/${nam}`);
    }

    return (
        <div className={`${classes.leftSideNav} ${open && classes.openMenu}`}>
            <div className={classes.menuIcon} onClick={handleMenuIcon}>
                <MenuIcon />
            </div>
            <div className={classes.listItem}>
                {
                    arr.map((i, index) => {
                        return <div>
                            <div key={index} className={classes.iconContent} onClick={()=>handleSubMenus(i.id,subMenu.show)}>
                                {i.name} <ArrowDropDownIcon />
                            </div>
                            {subMenu.id===i.id && subMenu.show?
                                (<div className={classes.submenu}>
                                    {
                                        i.subMenus.map((k,index)=>{
                                            return <p className={classes.subMenuItem} onClick={()=>handleNameChange(k.name)} key={index}>{k.name}</p>
                                        })
                                    }
                                </div>) :null
                                }
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default LayoutLeft;