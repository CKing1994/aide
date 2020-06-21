import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
import './App.css';
import Login from './view/login';
import Error from './view/error';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { Home } from './import'


ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>
        <Route  path="/"  component={Home} exact/>
        <Route  path="/login"  component={Login} exact/>
        <Route  path="/404"  component={Error}/>
      </Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
