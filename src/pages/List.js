import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { ritika, shubham } from '../ob';

const useStyle = makeStyles({
    listDiv: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        gap: 20
    },
    ulList: {
        border: '1px solid black',
        borderRadius: 5,
        padding: 20,
        listStyle: 'none'
    }
})

const List = () => {
    const classes = useStyle();
    const [checkedLeftList,setCheckLeftList]=useState([]);
    const [checkedRightList,setCheckRightList]=useState([]);
    const [leftList,setLeftList]=useState(ritika);
    const [rigthList,setRightList]=useState(shubham);

    const handleLeft = () => {
        let a=[...checkedLeftList,...rigthList]
        let newLeftList=[...leftList];
        const g=newLeftList.filter(x=>!checkedLeftList.includes(x))
        setLeftList(g);
        setRightList(a)
    }

    const handleRight = () => {
       let b=[...checkedRightList,...leftList]
       let newRightList=[...rigthList]
       const c=newRightList.filter(x=>!checkedRightList.includes(x));
       setRightList(c);
       setLeftList(b);
    }

    const handleLeftInput=(e,id)=>{
        const newCheckList=[...checkedLeftList];
        if(e.target.checked){
            // newCheckList.push(id)
            setCheckLeftList([...checkedLeftList,id])
        }
        else{
            const y=newCheckList.filter(x=> x!==id )
            setCheckLeftList(y);
        }
    }

    const handleRightInput=(e,id)=>{
        const newCheckList=[...checkedRightList];
        if(e.target.checked){
            setCheckRightList([...checkedRightList,id])
        }
        else{
            const y=newCheckList.filter(x=> x!==id )
            setCheckRightList(y);
        }
    }

    const handleSelectAllLeft=(e)=>{
        if(e.target.checked){
            setCheckLeftList([...leftList]);
        }
        else{
            setCheckLeftList([]);
        }
    }

    console.log('selectLeftList',checkedLeftList);


    const handleSelectAllRight=(e)=>{
        if(e.target.checked){
            setCheckRightList([...rigthList]);
        }
        else{
            setCheckRightList([]);
        }
    }

    return (
        <div className={classes.listDiv}>
            <ul className={classes.ulList}>
            <span><input type='checkbox' checked={checkedLeftList.length === leftList.length} onChange={(e)=>handleSelectAllLeft(e)}></input>Select all</span>
                {
                    leftList?.map((i, index) => {
                        return (<li key={i}>{i}
                            <input type='checkbox' checked={checkedLeftList.includes(i)} onChange={(e)=>handleLeftInput(e,i)}></input>
                        </li>)
                    })
                }
            </ul>
            <div><button onClick={handleLeft}>{'->'}</button>
                <button onClick={handleRight}>{'<-'}</button></div>
            <ul className={classes.ulList}>
            <span><input type='checkbox' checked={checkedRightList.length === rigthList.length} onChange={(e)=>handleSelectAllRight(e)}></input>Select all</span>
                {
                    rigthList.map((i) => {
                        return (
                            <li key={i}>{i}
                                <input type='checkbox' checked={checkedRightList.includes(i)} onChange={(e)=>handleRightInput(e,i)}></input>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default List;