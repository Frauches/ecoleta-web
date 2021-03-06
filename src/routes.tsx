import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home/index';
import CreatePoint from './pages/CreatePoint/index';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} exact path="/"/>
      <Route component={CreatePoint} path="/create-points"/>
    </BrowserRouter>
  );
};


export default Routes;