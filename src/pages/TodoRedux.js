import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import Loader from '../components/Loader';
import BasicModal from '../components/Modal';
import Tabs from '../components/Tabs';
import TodoList from '../components/TodoList';
import actions from '../redux/actions/todoRedux'

const TabsData = [{
    value: 'AllTodo',
    label: 'AllTodo'
},
{
    value: 'Completed',
    label: 'Completed'
},
{
    value: 'Todo',
    label: 'Todo'
}]

const TodoList1 = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
]

const TodoRedux = () => {
    const dispatch = useDispatch();
    const { list, loader , status ,openModal , inputValue} = useSelector(state => state.todoList);
    const stateWhole = useSelector(state => state);
    const [activeTab, setActiveTab] = useState('AllTodo');

    const handleTab = (value) => {
        setActiveTab(value)
    }

    /* const handleClick = (id,status) => {
        if(status==='delete'){
            dispatch(actions.deleteTodo.request(id))
        }
        else{
            dispatch(actions.deleteTodo.request(id))
        }
    } */

    const handleClickDelete = (id) => {
        dispatch(actions.deleteTodo.request(id))
    }
    const handleClickEdit = (id) => {
        dispatch(actions.editTodo.request({id,status:true}))
    }

    const handleInput = (e, id) => {
        dispatch(actions.checkedTodo.request({ isChecked: e.target.checked, id }));
    }

    const handleAddNewTodo=()=>{
        dispatch(actions.addNewModal.request({openModal:true}))
    }

    useEffect(() => {
        dispatch(actions.getTodoListAction.request());
        // return()=>{
        // }
    }, []);

    const closeModal=()=>{
        dispatch(actions.addNewModal.request({openModal:false}))
    }

    const handleInputChange=(e)=>{
          /* console.log('input change',e.target.value); */
          dispatch(actions.inputValueNewTodo.request({inputValue:e.target.value}))
    }

    const onclickSubmit=()=>{
        dispatch(actions.submitValueNewTodo.request({inputValue}))
        dispatch(actions.addNewModal.request({openModal:false}))
    }

    const dataList = () => {
        switch (activeTab) {
            case 'AllTodo':
                return <TodoList todoList={list}  onClickEdit={handleClickEdit} onClickDelete={handleClickDelete} onChange={handleInput} />
            case 'Completed':
                return <TodoList todoList={list.filter(i => i.completed)} onClickEdit={handleClickEdit} onClickDelete={handleClickDelete} onChange={handleInput} />
            case 'Todo':
                return <TodoList todoList={list.filter(i => !i.completed)} onClickEdit={handleClickEdit} onClickDelete={handleClickDelete} onChange={handleInput} />
            default:
                break;
        }
    }

    return (
        <div>
            <Tabs tabsData={TabsData} onClick={handleTab} activeTab={activeTab} />
            <div style={{background:'white',padding:'10px',textAlign:"end"}}>
                <button onClick={handleAddNewTodo}>Add New Todo</button>
            </div>
            {
                loader ? <Loader /> : dataList()
            }
            {
                openModal && <div><BasicModal title={'Add new Modal'}  handleClose={closeModal} open={openModal} onchange={(e)=>handleInputChange(e)} onclickSubmit={onclickSubmit}/></div>
            }
        </div>
    )
}

export default TodoRedux;
