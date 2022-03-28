import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Redirect, Route,  Switch } from "react-router-dom";
import LoginPage from './pages/Login';
import Container from './components/container';

function PrivateRoute({ children, ...rest }) {
  const auth = localStorage.getItem('token')

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location || '/' }
            }}
          />
        )
      }
    />
  );
}

const App = () => {
  const[loginState,setLoginState]=useState(true);

  

  return (
    <>
      <BrowserRouter >
        <Switch>
        <Route path='/login' component={LoginPage}></Route>
        {/* <Route path='/signUp' component={LoginPage}></Route> */}
        <PrivateRoute path='/'>
          <Container></Container>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>

    </>
  )
}

export default App;
