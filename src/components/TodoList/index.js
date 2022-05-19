import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import {  paperClasses } from '@mui/material';
import { hasUnreliableEmptyValue } from '@testing-library/user-event/dist/utils';
import { useDispatch, useSelector } from 'react-redux';
import BasicModal from '../Modal';
import actions from '../../redux/actions/todoRedux';

const useStyles = makeStyles({
    listContainer: {
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid black',
        padding: '10px 10px',
        '& > div:first-child': {
            flex: 1,
        },
        '& > div > button': {
            margin: 5
        }
    },
    inputText: {
        display: 'flex',
        alignItems: 'center'
    },
    cutText: {
        textDecoration: 'line-through'
    }
})

const TodoList = ({ todoList, onChange, onClickDelete,onClickEdit }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [editInput,setEditInput]=useState('')
    const { list, loader , status,editId,valueInput} = useSelector(state => state.todoList);

    const handleClose=()=>{
        dispatch(actions.editTodo.request({status:false}))
    }

    const handleInputChange=(e)=>{
          setEditInput(e.target.value)
    }
    const onclickSubmit=()=>{
        dispatch(actions.editTodo.editSubmit({valueInput:editInput}))
    }
    return (
        <div>
        <div>
            {
                todoList.map((i, index) => {
                    return (
                        <div className={classes.listContainer}>
                            <div className={classes.inputText}>
                                <input type='checkbox' checked={i.completed}  onChange={(e) => onChange(e,i.id)}></input>
                                <div className={i.completed ? classes.cutText : ''}> {i.title} </div>
                            </div>
                            <div>
                                <button onClick={() => onClickDelete(i.id,'delete')}>Delete</button>
                                {
                                    i.completed ? null : <button onClick={() => onClickEdit(i.id)}>edit</button>
                                }

                            </div>
                        </div>
                    )
                })
            }
        </div>
        <div>
            <BasicModal onclickSubmit={onclickSubmit} onchange={(e)=>handleInputChange(e)} open={status} handleClose={handleClose}/>
        </div>
        </div>
    )
}

export default TodoList;


