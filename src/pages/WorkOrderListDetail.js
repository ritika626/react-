import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Tabs from '../components/Tabs';
import { ob } from '../ob';
import Apple from '../components/TabsContent/apple';
import Banana from '../components/TabsContent/banana';
import Bhindi from '../components/TabsContent/bhindi';

const WorkOrderListDetail = () => {
    const history = useHistory();
    const { location } = history;
    const params = useParams();
    const [activeTab, setActiveTab] = useState(1);

    console.log(params);

    const handleTabChange = (id) => {
        setActiveTab(id.id)
    }
    //=======>  find the greatest no.= 10

    /*   let greatestNo=[1,2,4,5,7,10,5,9,0,20,50,200,10000]
     function largestNo(arr){
         let num=0;
         for(let i=0;i<arr.length;i++){
            if(arr[i]>=num ) {
                 num=arr[i]
            }
         }
         return num;
     }
 
     console.log(...greatestNo);
 
     let num=Math.max(...greatestNo);
     console.log('num',num);
   */
    //======> {name:'riti',age:1,class:'a'},{fruits:'apple',taste:'sour',size:0},{vegetables:'bhindi',color:'green',price:'asmaan chura'}
    /* let a={name:'riti',age:1,class:'a'};
    let b={fruits:'apple',taste:'sour',size:0}
    let c={vegetables:'bhindi',color:'green',price:'asmaan chura'}
    function concatObj(a,b,c){
          let arr={...a,...b,...c}
          return arr
    }
    console.log(concatObj(a,b,c)) */

    /*  let ob={
         a:[{
             name:'riti',age:1,class:'a',address:{
                 line:'ambala',city:'pune',pinCode:100427
             } ,
         },{
             name:'kyu',age:4,class:'c',address:{
                 line:'kisliye',city:'lateAye',pinCode:100427
             }
         }],
         b:[{
             name:'shubh',age:1,class:'y',address:{
                 line:'kiko',city:'yamunanagar',pinCode:135001
             } 
         }]
     }
     function obj(ob){
        let emp= ob['a'][1]
        ob.a.splice(1,1)
      ob.b.push(emp)
          return ob;
     }
     console.log('heavy obj', obj(ob)); */

    function generateTabData(ob) {
        return ob.map(i => {
            return { 'label': i.name, 'value': i.id , dot:i.actionFlag === true}
        })
    }

    function tabsContent(id) {
        switch (id) {
            case 1:
                return <Apple />
            case 2:
                return <Banana />
            case 3:
                return <Bhindi />
            case 4:
                return <Apple />
            case 5:
                return <Banana />
            default:
                return <Bhindi />
        }
    }

    return (
        // from state location  <h1>WorkOrderListDetail age {location.state?.age}</h1>
        // from url bring age
        <>
            <h1>WorkOrderListDetail age {params.age}</h1>
            <div>
                {/* <Tabs tabsData={[{label:'a',value:4},{label:'b',value:3},{label:'c',value:2},{label:'d',value:1}]} onClick={(id)=>handleTabChange({id})} activeTab={activeTab}/> */}
                <Tabs tabsData={generateTabData(ob)} onClick={(id) => handleTabChange({ id })} activeTab={activeTab} />
                {tabsContent(activeTab)}
            </div>
        </>
    )
}

export default WorkOrderListDetail;