import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    container: {
        display: 'flex',
        flexDirection:'column'
    },
    subBox: {
        display: 'flex',
        borderLeft: '1px solid black',
        borderTop: '1px solid black',
        borderRight: '1px solid black',
        '&:last-child': {
            borderBottom: '1px solid black'
        }
    },
    atomicBoxes: {
        width:'30px',
        height:'30px',
        padding: '25px',
        borderRight: '1px solid black',
        '&:last-child': {
            borderRight: 'none'
        }
    },
    main: {
        display: 'flex',
        height: 'calc(100vh - 74.58px)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    activeBox:{
        background:'black',
        color:'white'
    }
})

const Box = () => {
    const classes = useStyle();
    const [arr, setArr] = useState([]);
    const [active,setActive]=useState([]);

    useEffect(() => {
        dynamicArr(25);
    }, [])

    const dynamicArr = (num) => {
        let empArr = [];
        for (let i = 0; i < num / 5; i++) {
            let tempArr = []
            let nes = i * 5 + 1
            for (let j = 0; j < 5; j++) {
                tempArr = [...tempArr, nes + j]
            }
            empArr = [...empArr, tempArr];
        }
        setArr(empArr);
    }

    const handleClick=(col)=>()=>{
        if(active.includes(col)){
           const a = active.filter(k=>k!==col)
           setActive(a);
        }
        else{
            setActive([...active,col]);
        }
    }
    //console.log(active)

    return (
        <div className={classes.main}>
            <div className={classes.container}>
                {
                    arr.map((row, rowIndex) => {
                        return <div className={classes.subBox} key={rowIndex}>
                            {
                                row.map((col, colIndex) => {
                                   return <div className={`${classes.atomicBoxes} ${active.includes(col)? classes.activeBox :''}`} key={colIndex} onClick={handleClick(col)}>{col}</div>
                                }
                                )}
                        </div>

                    })
                }
            </div>
        </div>
    )
}
export default Box;