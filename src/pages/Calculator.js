import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    calculator: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 80px)'
    },
    box: {
        width: 200
    },
    num: {
        display: 'flex',
        width: '100%',
        '& div': {
            padding: 10,
            border: '1px solid grey',
            width: 50,
            textAlign: 'center'
        },
        '& > div': {
            border: '1px solid grey',
            flex: 1,
            height: 30
        }
    }
})

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, '-', '/'], ['+', 'x', '='], ['clr']]

const Calculator = () => {
    const [num1, setNum1] = useState('');
    const [num2,setNum2]= useState('');
    const [operator,setOperator]=useState('')
    const classes = useStyles();

    const handleClick = (col) => {
        let empArr=''
        if (col === 'clr') {
            setNum1('');
            return;
        }
        if(col==='+' || col==='-' || col==='/'){
             setNum2([num1])
             setNum1('')
             setOperator(col)
             return 
        }
        empArr=num1+col
        setNum1(empArr)
        //setNum1(showNum)
        /* let lol= showNum.split('+' || '-' || '/' || 'x')
        console.log('lol',lol);
        if(lol.length===2){
            let result=Number(lol[0]) + Number(lol[1]) 
            setNum1(result + '+');
        }
        else{
            setNum1(showNum);
        } */
    }

    console.log('empArr',num1,num2);

    return (
        <div className={classes.calculator}>
            <div className={classes.box}>
                <div className={classes.num}>
                    <div>{ operator}{num1} </div>
                </div>
                {
                    arr.map((row, rowIndex) => {
                        return <div className={classes.num} key={rowIndex}>
                            {row.map((col, colIndex) => {
                                return <div onClick={() => handleClick(col)} key={colIndex}>{col}</div>
                            })}
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Calculator;