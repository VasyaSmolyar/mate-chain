import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from 'consts';

import MainScreen from 'screens/MainScreen';
import LoginScreen from 'screens/LoginScreen';
import RegistrationScreen from 'screens/RegistrationScreen';

const NonAuthRoutes = () => (
  <Switch>
    <Route path={routes.getAuthLogin()} component={LoginScreen} />
    <Route path={routes.getAuthRegistration()} component={RegistrationScreen} />
    <Route path={routes.getBase()} component={MainScreen} />
  </Switch>
);

export default NonAuthRoutes;
