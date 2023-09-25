import React from 'react';
import { useState } from 'react';

const ListArray =["Alberta","Ambala","Berlin","Albama","Bilaspur","Canada","Turkey","Github"];

const IntrvPrac = () =>{
    const [list,setList] = useState(ListArray);
    // const [search,setSearch] =useState("");

    // const handleChange =(e)=>{
    //     //  setSearch(e.target.value);
    //      if(e.target.value){
    //         let strLength = e.target.value.length
    //         const listData = ListArray.filter((val) => val.slice(0,strLength).toLocaleLowerCase() === e.target.value.toLocaleLowerCase())
    //         setList(listData)
    //      }
    //      else{
    //         setList(ListArray);
    //      }
    // }

    const handleChange = () =>{

    }

    const handleSearch =()=>{
        
    }

    return (
        <div>
            <div>
            <input type="text" onChange={handleChange} placeholder='search'></input>
            <button onClick={handleSearch}>Search</button>
            </div>
           {/* <div>
            <ul>
              {
                list.map((item,index) => {
                    return <li key={index}>{item}</li>
                })
              }
            </ul>
           </div> */}
        </div>
    )
}

export default IntrvPrac;