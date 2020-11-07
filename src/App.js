import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

//import logo from './logo.svg';

const promise = loadStripe('pk_test_51Hi2gGF9S8vXhUDh1I2u4ik1e278CU5EsoPVsico9Xd6yQUHFqTqG3SfnBJCJAM3whboKQdyyM3yV5SAJZjhvje700EZBgVCUn');

function App() {
  const [{}, dispatch] = useStateValue();

//Listener
useEffect(() => {
  // weill only runs once when the app component loads...

  auth.onAuthStateChanged(authUser => {
    console.log ('THE USER IS >>>', authUser);

    if (authUser) {
      // the user just logged in / the user was logged in

      dispatch({
        type: 'SET_USER',
        user: authUser
      })
    } else {
      // the user is logged out
      dispatch({
        type:'SET_USER',
        user: null
      })
    }
  })
},[])

  return (
    //BEM
    <Router>
    <div className="app">
      <Switch>
        <Route path="/orders">
          <Header />
          <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
         </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}> 
          <Payment />
          </Elements>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;