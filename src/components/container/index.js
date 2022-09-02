import React, { lazy, Suspense } from 'react';
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
import Form from '../../pages/CustomForm';
import TodoRedux from '../../pages/TodoRedux';
import PracticeRedux from '../../pages/PracticeRedux';
import TicToeRedux from '../../pages/TicToeRedux';
import Calculator from '../../pages/Calculator';
import Box from '../../pages/Box';
import User from '../../pages/Users';
import Library from '../../pages/Library';
import Settings from '../../pages/Settings';
import LayoutNav from '../../pages/LayoutSelf';
import ApiAccord from '../../pages/ApiAccord';
import BlogContent from '../../components/BlogContent';
const ChatRedux = React.lazy(() => import('../../pages/Chat'))

const Container = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/list' component={List} />
                <Route path='/todo' component={Todo} />
                <Route path='/user' component={User} />
                <Route path='/calculator' component={Calculator} />
                <Route path='/apiAccord' component={ApiAccord} />
                <Route path='/blogContent/:id' component={BlogContent} />
                <Route path='/library' component={Library} />
                <Route path='/settings' component={Settings} />
                <Route path='/chat' >
                    <Suspense fallback={<div>Loading...</div>}>
                        <ChatRedux />
                    </Suspense>
                </Route>
                <Route path='/layoutNav' component={LayoutNav} />
                <Route path='/box' component={Box} />
                <Route path='/todoRedux' component={TodoRedux} />
                <Route path='/ticToeRedux' component={TicToeRedux} />
                <Route path='/practiceRedux' component={PracticeRedux} />
                <Route path='/customForm' component={Form} />
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
