import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { DefaultRoute, Routes } from './index'; // Import the DefaultRoute and Routes

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {/* Redirect to the default route */}
        <Redirect exact from="/" to={DefaultRoute} />

        {/* Add other routes */}
        {Routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}

        {/* Add a catch-all route for 404 */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

// Define a NotFound component for the 404 page
const NotFound = () => {
  return <h1>404 - Not Found</h1>;
};

export default AppRouter;
