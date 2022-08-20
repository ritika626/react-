import React from 'react';
import { makeStyles } from '@mui/styles';
import LayoutRight from '../components/LayoutRight';
import LayoutLeft from '../components/LayoutLeft';
import { Route, Switch, useHistory, useLocation, useParams } from 'react-router-dom';
import CommonName from '../components/CommonName';

const useStyle = makeStyles({
    sideNav: {
        display: 'flex'
    }
});

const arr = [
    {
        id: 1,
        name: 'ritika',
        open: true,
        subMenus: [
            { id: 1, name: 'nitika', open: true },
            { id: 3, name: 'nitika', open: false },
            { id: 2, name: 'jaya', open: true },
            { id: 4, name: 'shushma', open: false },
        ],
    },
    {
        id: 2, name: 'ritika1', open: true,
        subMenus: [],
    },
    {
        id: 3,
        name: 'ritika',
        open: true,
        subMenus: [
            { id: 1, name: 'nitika', open: true },
            { id: 3, name: 'nitika', open: false },
            { id: 2, name: 'jaya', open: true },
            { id: 4, name: 'shushma', open: false },
        ],
    },
]

export const ShubhamBox = () => {
    return (
        <>shubham</>
    )
}

const LayoutNav = (props) => {
    const classes = useStyle();
    //const location =useHistory();
    const location = useLocation();
   /*  const match = useParams()
    console.log('location',match); */
    //const baseUrl=location.pathname;
    
    return (
        <>
            <div className={classes.sideNav}>
                <LayoutLeft arr={arr} />
                <LayoutRight>
                    <Switch>
                        <Route path={`/layoutNav/:name`} component={CommonName} />
                    </Switch>
                </LayoutRight>

            </div>
        </>
    )
}
export default LayoutNav;