import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// pages
import { PageNotFound } from '../pages/PageNotFound';
import { Landing } from '../pages/LandingPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/page-not-found" component={PageNotFound} />
        <Route path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
