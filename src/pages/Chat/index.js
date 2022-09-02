import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import './_chatVariables.scss';
import CardChat from '../../components/ChatComponents/CardChat';
import axios from 'axios';
import { SettingsBackupRestoreSharp } from '@mui/icons-material';
// https://jsonplaceholder.typicode.com/users

const useStyles=makeStyles({
});

const lastMessageArray=['what is this?', 'haha', 'please let me know','can we connect','is my screen visible'];

const ChatRedux =()=>{
    const classes=useStyles();
    const [users,setUsers]=useState([]);
    
    useEffect(async()=>{
         let {data}= await axios('https://jsonplaceholder.typicode.com/users');
         let newData=data.map((x)=>{
            /* if(!x['lastMessage']){
              return {...x,lastMessage:lastMessageArray[lastMessageArray.length-1]}
            }
            else{
               return x
            } */
            return {...x,messages:lastMessageArray}
         })
         setUsers(newData);
    },[])

    

    return (
       <div className={classes.container}>
         {
            users.map((user,index)=>{
               return <CardChat key={user.id} name={user.name} lastMessage={user.messages[user.messages.length-1]} unReadMessageCount={user.messages.length}/>
            })
         }
       </div>
    )
}

export default ChatRedux;