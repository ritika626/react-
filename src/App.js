import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/Login";
import Container from "./components/container";
// import FinanceSample from "./FinancialSample.xlsx";

function PrivateRoute({ children, ...rest }) {
  const auth = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location || "/" },
            }}
          />
        )
      }
    />
  );
}

const App = () => {
  const [loginState, setLoginState] = useState(true);

  let twoSum = (array, sum) => {
    let hashMap = {},
      results = [];

    for (let i = 0; i < array.length; i++) {
      if (hashMap[array[i]]) {
        console.log("hash", hashMap);
        results.push([hashMap[array[i]], array[i]]);
      } else {
        console.log("hash2", hashMap);
        hashMap[sum - array[i]] = array[i];
      }
    }
    return results;
  };
  console.log(twoSum([10, 20, 10, 40, 50, 60, 70, 30], 50));

  const handleClick = () => {
    window.open("c://Users//HP//Downloads//FinancialSample.xlsx", "_self");
  };
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage}></Route>
          {/* <Route path='/signUp' component={LoginPage}></Route> */}
          <PrivateRoute path="/">
            <Container></Container>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
      {/* <a
        href="/FinancialSample.xlsx"
        // onClick={handleClick}
      >
        ghgk
      </a> */}
    </>
  );
};

export default App;
