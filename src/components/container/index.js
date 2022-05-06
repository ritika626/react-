import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../../pages/About';
import List from '../../pages/List';
import Contact from '../../pages/Contact';
import WorkOrderList from '../../pages/WorkOrderList';
import Home from '../../pages/Home';
import Navbar from '../Navbar';
import WorkOrderListDetail from '../../pages/WorkOrderListDetail'
import Shubh from '../TabsContent/shubh';
import ShubhRef from '../TabsContent/shubhRef';
import Practice from '../../pages/practice';
import Todo from '../../pages/Todo';

const Container = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/list' component={List} />
                <Route path='/todo' component={Todo} />
                <Route path='/practice' component={Practice} />
                <Route path='/woList/details/:age' component={WorkOrderListDetail}></Route>
                <Route path='/woList' component={WorkOrderList}></Route>
                <Route path='/shubh' component={Shubh}></Route>
                <Route path='/shubhref' component={ShubhRef}></Route>
                <Route path='/contact' component={Contact} />
            </Switch>
        </>
    )
}

export default Container;