import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import Tabs from '../components/Tabs';
import TodoList from '../components/TodoList';
import actions from '../redux/actions/todoRedux'

const TabsData=[{
    value:'AllTodo',
    label:'AllTodo'
},
{
    value:'Completed',
    label:'Completed'
},
{
    value:'Todo',
    label:'Todo'
}]

const TodoList1=[
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

const TodoRedux=()=>{
    const dispatch=useDispatch();
    const {list,loader}=useSelector(state=>state.todoList);
    const stateWhole=useSelector(state=>state);
    const [activeTab,setActiveTab]=useState('AllTodo');

    const handleTab=(value)=>{
        setActiveTab(value)
    }

    const handleClick=()=>{

    }

    const handleInput=()=>{

    }

    useEffect(()=>{
        dispatch(actions.getTodoListAction.request(TodoList1));
        // return()=>{

        // }
    },[]);

    return(
        <div>
            <Tabs tabsData={TabsData}  onClick={handleTab} activeTab={activeTab}/>
            <TodoList todoList={TodoList1} onClick={handleClick} onChange={handleInput}/>
        </div>
    )
}

export default TodoRedux;
