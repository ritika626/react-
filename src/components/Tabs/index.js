import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
    tabs: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    tabItem: {
        position: 'relative',
        flex: 1,
        textAlign: 'center',
        padding: '10px 50px',
        background: 'lightGrey',
        cursor: 'pointer',
        border: '1px solid black',
        margin: 0.5,
        /*  "&:hover":{
             background:'black',
             color:'white'
         } */
    },
    active: {
        backgroundColor: 'blue',
        color: 'white'
    },
    tabDot: {
        content: '',
        borderRadius: 4,
        backgroundColor: 'red',
        height: 8,
        width: 8,
        position: 'absolute'
    }
})

// function to break single array into two evens:

/* let empArr1 = []
    let empArr2 = []

function breakArray(arr) {
    for (let i = 0; i <arr.length; i++) {
        if (arr.length / 2 > i) {
              empArr1.push(arr[i]);
        }
        else{
            empArr2.push(arr[i])
        }
    }
    return {empArr2,empArr1}
}

console.log(breakArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11])); */

const Tabs = ({ tabsData, onClick, activeTab }) => {
    const classes = useStyles();

    // tabsData=[{
    //     label:"ritika",
    //     value:1
    // }]

    return (
        <div className={classes.tabs}>
            {
                tabsData?.map((i, index) => {
                    return (
                        <div className={` ${classes.tabItem} ${activeTab === i.value ? classes.active : ''}`} key={index} onClick={() => onClick(i.value)}>
                            {i.label}
                            {
                                i.dot && (<span className={`${classes.tabDot} ${i.dot ? classes.dot : ''} `}></span>)
                            }

                        </div>
                    )

                })
            }
            {/*   <div className={classes.tabItem + " " + classes.active}>A</div>
            <div className={classes.tabItem}>b</div>
            <div className={classes.tabItem}>c</div>
            <div className={classes.tabItem}>d</div> */}
        </div>
    )
}

export default Tabs;