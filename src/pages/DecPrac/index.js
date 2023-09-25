import { Card } from "@mui/material";
import React, { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import Tabs from "../../components/Tabs";
import {dummyData} from '../../ob';

const tabsDATA={
    "tab1":"game1",
    "tab2":"game2",
    "tab3":"game3"
}

const DecPrac =()=>{
    const [activeTab,setActiveTab]=useState("tab1");

    // tabsDATA[activeTab]

    let x=[];

    const formatTabsData=useMemo(()=>{
       return Object.keys(tabsDATA).map((i)=>{
            // return x={[i]:tabsDATA[i]}
            return x={label:tabsDATA[i],value:i}
        })
    },[tabsDATA]);

    const onClick=(e)=>{
       setActiveTab(e)
    }

    const userInfo=()=>{
        let tabInfo =null;
        // switch(activeTab){
        //     case "tab1":
        //         tabInfo= dummyData.map((i,index)=>{
        //               if(i.tab==="game1"){
        //                 return(<div>
        //                     <p>{i.first_name}</p>
        //                     <p>{i.ip_address}</p>
        //                 </div>)
        //               }
        //         })
        //         break;
        //     case "tab2":
        //         tabInfo=dummyData.map((i,index)=>{
        //             if(i.tab==="game2"){
        //               return(<div>
        //                   <p>{i.first_name}</p>
        //                   <p>{i.ip_address}</p>
        //               </div>)
        //             }
        //       })
        //       break;
        //     case "tab3":
        //         tabInfo= dummyData.map((i,index)=>{
        //             if(i.tab==="game3"){
        //               return(<div>
        //                   <p>{i.first_name}</p>
        //                   <p>{i.ip_address}</p>
        //               </div>)
        //             }
        //       })
        //       break;
        //     default:
        //         return null
        // }
        return dummyData.filter((i)=>i.tab===tabsDATA[activeTab]).map((i)=>{
            return(<div>
                                  <p>{i.first_name}</p>
                                  <p>{i.ip_address}</p>
                              </div>)
        })
       
    }

    return (
        <>
        <Tabs tabsData={formatTabsData} activeTab={activeTab} onClick={onClick}/>
        {userInfo()}
        {/* {activeTab=="tab1"}
        <Card style={{padding:10,border:'1px solid black',margin:5}}>
            <div style={{padding:10}}>
                hjdbhdb
            </div>
        </Card> */}
        </>
    )
}

export default DecPrac;