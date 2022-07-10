import React from 'react';
import { makeStyles } from '@mui/styles';
import LayoutRight from '../components/LayoutRight';
import LayoutLeft from '../components/LayoutLeft';

const useStyle = makeStyles({

});

const arr = [
    {
        id: 1, name: 'ritika', open: true,
        subMenus: [
            { id: 1, name: 'shubham', open: true },
            { id: 3, name: 'nitika', open: false },
            { id: 2, name: 'jaya', open: true },
            { id: 4, name: 'shushma', open: false },
        ],
    },
    {
        id: 2, name: 'ritika1', open: true,
        subMenus: [],
    },
]

const LayoutNav = () => {
    const classes = useStyle();
    return (
        <div>
            <LayoutLeft/>
            <LayoutRight/>
        </div>
    )
}
export default LayoutNav;