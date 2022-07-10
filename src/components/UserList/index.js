import React from 'react';
import Card from '../Card';

const UserList=({userList,handleDelete})=>{
    return (
         <div>
            {
                userList.map((i,index)=>{
                    return  <Card key={index} name={i.name} age={i.age} country={i.country} handleDelete={()=>handleDelete(i.id)}/>
                })
            }
           
         </div>
    )
}
export default UserList;