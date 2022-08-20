import React from 'react';
import { makeStyles } from '@mui/styles';
import Accordian from '../Accordian';

const Obj = {
    koki: {
        name: 'koki',
        age: 3,
        class: '6',
        hobbies: ['singing', 'dance', 'try']
    },
    koki1: {
        name: 'koki1',
        age: 3,
        class: '8',
        hobbies: ['singing', 'dance', 'try']
    }
};

const useStyle = makeStyles({

})



const NestedMenus = () => {
    const classes = useStyle();
   /*  Object.keys(Obj).map((i,index)=>{
        console.log(Obj[i]);
    }); */
    return (
        <div>
            {
                Object.keys(Obj).map((i, index) => {
                    return (
                        <Accordian title={i} content={<><p>class: {Obj[i].class}</p><p>hobbies:{Obj[i].hobbies.join(', ')}</p></>} ind={[1].includes(index)}/>
                    )
                })
            }

        </div>
    )
}
export default NestedMenus;