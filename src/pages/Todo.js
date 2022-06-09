import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const useStyle = makeStyles({
    todoTabContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center'
    },
    tabs: {
        padding: 10,
        flex: 1,
        border: '1px solid grey',
        margin: 5,
    },
    tabActive: {
        backgroundColor: 'black',
        color: 'white'
    },
    LineThrou: {
        textDecoration: 'line-through'
    },
    editClass: {
        marginRight: 5
    },
    checkBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: 'relative',
        '&:hover': {
            '& .testClass': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255,0.6)',
                color: 'black',
                cursor: 'pointer'
            },
            '& .h3Class': {
                color: 'white'
            }

        },
        '& .h3Class': {
            flex: 1
        }
    },
    deleteButton: {
        position: 'absolute',
        top: 0,
        right: '60px',
        bottom: 0,
        left: 0,
        display: 'none',
    },
    inputClass:{
        width:'100%',
        padding:10
    }
})

const TodoTabArr = [{
    id: 1,
    tabName: 'All'
},
{
    id: 2,
    tabName: 'Completed'
},
{
    id: 3,
    tabName: 'Todo'
}]

const Todo = () => {
    const classes = useStyle();
    const [active, setActive] = useState(1);
    const [todoList, setTodoList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [editTodo,setEditTodo]=useState(null);
    const [startDate, setStartDate] = useState(null);

    const handleTab = (id) => {
        setActive(id)
    }

    useEffect(async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10')
            const result = await response.json()
            setTodoList(result);
        }
        catch (error) {
            console.log(error);
        }
    }, [])

    const handlecheckChange = (e, id) => {
        const inde = todoList.findIndex(i => i.id === id)
        const toggleCompleted = [...todoList];
        toggleCompleted[inde].completed = e.target.checked
        setTodoList(toggleCompleted);
    }

    const handleDeleteTodo = (id) => {
        const deleteTodo = [...todoList]
        const a = deleteTodo.filter(i => i.id !== id);
        setTodoList(a);
    }

    const handleEdit = (id) => {
        setShowModal(true);
        setEditTodo(id);
        if(id?.date){
            setStartDate(new Date(id?.date))
        }
    }

    const handleEditText=(e)=>{
        setEditTodo({...editTodo,title:e.target.value})
    }
    console.log('todolist', todoList);

    const handleSave=(i,startDate)=>{
         const saveTodo=[...todoList];
         const todoIndex =saveTodo.findIndex(x=>x.id===i.id)
         saveTodo[todoIndex].title=i.title
         saveTodo[todoIndex].date=moment(startDate).format('MM-DD-YYYY');
         setEditTodo(saveTodo);
         setShowModal(!showModal);
         setStartDate(null)
    }

    const renderTabContent = () => {
        switch (active) {
            case 1:
                return (
                    <div>
                        {todoList?.map((i, index) =>
                            <div>
                                <div className={classes.checkBox}>
                                    <h3 key={i.id} className={`h3Class ${i.completed ? classes.LineThrou : ''}`}>{i.title}&nbsp;{i?.date}</h3>
                                    <div className={classes.editClass} onClick={()=>handleEdit(i)}>Edit</div>
                                    <input type='checkbox' checked={i.completed} onChange={(e) => handlecheckChange(e, i.id)}>
                                    </input>
                                    <div className={`${classes.deleteButton} testClass`} onClick={() => handleDeleteTodo(i.id)}>
                                        Delete
                                    </div>
                                </div>
                            </div>
                        )}
                        {
                            showModal && (
                                <Modal
                                    open={showModal}
                                    onClose={()=>setShowModal(!showModal)}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <input className={classes.inputClass} type='text' value={editTodo?.title} onChange={(e)=>handleEditText(e)}></input>
                                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                        <button onClick={()=>handleSave(editTodo,startDate)}>Save</button>
                                    </Box>
                                </Modal>
                            )
                        }
                    </div>
                );
            case 2:
                return (<div>{todoList?.map(i => { return i.completed ? (<h3 className={classes.LineThrou}>{i.title}</h3>) : null })}</div>)
            case 3:
                return (<div>{todoList?.map(i => { return !i.completed ? (<h3>{i.title}</h3>) : null })}</div>)
            default:
                return null;
        }
    }

    return (
        <div>
            <div className={classes.todoTabContainer}>
                {
                    TodoTabArr?.map(i => {
                        return (
                            <div className={`${classes.tabs} ${i.id === active ? classes.tabActive : ''}`} onClick={() => handleTab(i.id)} >
                                {i.tabName}
                            </div>
                        )
                    })
                }
            </div>
            {renderTabContent()}
        </div>
    )
}

export default Todo;