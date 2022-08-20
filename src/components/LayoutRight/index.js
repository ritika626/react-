import React from 'react';
import { makeStyles } from '@mui/styles';
import Accordian from '../Accordian';
import NestedMenus from '../NestedMenus';
import { Route, Switch, useHistory } from 'react-router-dom';
import CommonName from '../CommonName';

const useStyle = makeStyles({
    accordianWrap: {
        width: '100%'
    },
});

const accordionData = [
    {
        title: 'Section 1',
        content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
        open: true
    },
    {
        title: 'Section 2',
        content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dic`},
    {
        title: 'Section 2',
        content: <h4>ritika</h4>,
        open: true
    }
]

const LayoutRight = ({children}) => {
    const classes = useStyle();
    const {location}=useHistory();
    console.log('match',location);

    return (
        <>
            {children}
           {/*  <div className={classes.accordianWrap}>
                {
                    accordionData.map((i, index) => {
                        let ind = [1, 2]
                        return (
                            <Accordian title={i.title} content={i.content} ind={[1, 2].includes(index)} />
                        )
                    })
                }
                <p>
                    NestedMenus
                </p>
                <NestedMenus />
            </div> */}

        </>
    )
}

export default LayoutRight;