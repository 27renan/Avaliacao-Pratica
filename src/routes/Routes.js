import React from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom'
import Cooperativa from '../pages/ListDataCooperativa/ListCooperativa.js'
import Motorista from '../pages/ListDataMotorista/ListMotorista.js'
import Login from '../pages/SignIn/SignIn.js'

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Cooperativa" component={Cooperativa} />
          <Route path="/Motorista" component={Motorista} />
          <Redirect from='*' to='/' />
        </Switch>
        </BrowserRouter>
    </>
  );
}
