import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from 'consts';

import HomeScreen from 'screens/HomeScreen';

const AuthRoutes = () => (
  <Switch>
    <Route path={routes.getHome()} component={HomeScreen} />
  </Switch>
);

export default AuthRoutes;