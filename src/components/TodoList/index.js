import React from 'react';
import { makeStyles } from '@mui/styles';
import { paperClasses } from '@mui/material';
import { hasUnreliableEmptyValue } from '@testing-library/user-event/dist/utils';

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
    }
})

const TodoList = ({ todoList, onChange, onClick }) => {
    const classes = useStyles();
    return (
        <div>
            {
                todoList.map((i, index) => {
                    console.log(i)
                    return (
                        <div className={classes.listContainer}>
                            <div>
                                <input type='checkbox' onChange={(e) => onChange(e)}></input>
                                {i.title}
                            </div>
                            <div>
                                <button onClick={() => onClick()}>Delete</button>
                                <button onClick={() => onClick()}>edit</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default TodoList;


