import React, { useEffect, useState } from 'react';
import Tabs from '../../components/Tabs';
import { dummyData } from '../../ob';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import Checkbox from '../../components/Checkbox';
import { SentimentVeryDissatisfiedOutlined } from '@mui/icons-material';

const useStyles = makeStyles({
    highLightData:{
        background : 'lightblue',
    },
    deleteButton : {
        textAlign : 'right' ,
        padding : 5
    },
    contentBox : {
        display : 'flex',
        alignItems : 'baseline',
        justifyContent : 'space-between'
    },
    checkbox: {

    }
});

const HighlightUserInfo = () => {
    const [tempCheckedValue, setTempCheckedValue]  = useState([]);
    const classes = useStyles();
    const [activeTab, setActiveTab] = useState("Female");
    const [dummyDataArray, setDummyData] = useState(dummyData);
    const [deletedData, setDeletedData] = useState([]);
     
    const generateTabData = () => {
        // [{value:"Female",label:"Female"} , {value:"Male",label:"Male"}]
        const tabValue = [];

        dummyDataArray.map((i,index) => {
            if(!tabValue?.some(x => x?.value === i?.gender)){
                tabValue?.push({value:i.gender, label:i.gender})
            }
        })

        if(deletedData.length && !tabValue?.some(x => x?.value === "Deleted")){
            tabValue?.push({value:"Deleted", label:"Deleted"})
        }

        return tabValue;
    };

    const handleTabClick = (e) => {
        setActiveTab(e)
        setTempCheckedValue([])
    }

    const handleOnChange = (e,id) => {
          if(!tempCheckedValue?.includes(id)){
            setTempCheckedValue([...tempCheckedValue,id]);
          }
          else{
            setTempCheckedValue(tempCheckedValue.filter(i => i !== id));
          }
    };

    const deleteCheckedValue = () => {
        setDummyData(dummyDataArray.filter(i => !tempCheckedValue.includes(i.id)))
        setDeletedData(dummyDataArray.filter(i => tempCheckedValue.includes(i.id)));
        setTempCheckedValue([])
    };

    const userInfoData = () => {
       const resultData = activeTab === "Deleted" ? deletedData: dummyDataArray
       let userData = resultData.map((i,index) => {
            return (
                <div key={index} className={`${i.gender === activeTab ? classes.highLightData : ""} ${classes.contentBox}`}>
                    <div>
                        <h2>{i.first_name}</h2>
                        <h4>{i.gender}</h4>
                        <p>{i.email}</p>
                    </div>
                    <div className={classes.checkbox}>
                        {/* <Checkbox onChange={(e)=>setCheckBoxValue(e.target.checked)}/> */}
                        <Checkbox onChange={(e) => handleOnChange(e,i.id)} alreadyChecked={tempCheckedValue.includes(i.id)} />
                    </div>
                </div>
            )
        })
        return userData;
    };

    const restoreData = () =>{
         setDummyData([...dummyDataArray,...deletedData.filter(i=> tempCheckedValue.includes(i.id))])
         setDeletedData(deletedData.filter(i=> !tempCheckedValue.includes(i.id)))
         setTempCheckedValue([]);
    };

    return(
        <>
            <Tabs tabsData={generateTabData()} activeTab={activeTab} onClick={handleTabClick} />
            { tempCheckedValue.length  ?  
            ( <div className={classes.deleteButton}>
                <Button onClick={deletedData.length && deletedData ? restoreData : deleteCheckedValue}>{deletedData.length  && activeTab === "Deleted"? 'Restore' : 'Delete' }</Button>
              </div>
            ) : null}
            {userInfoData()}
        </>
    )
}

export default HighlightUserInfo;