import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthContext } from 'context';
import { AuthRoutes, NonAuthRoutes } from 'components/routes';

function App() {
  return (
    <Router>
      <AuthContext.Provider value={{
        id: 0,
        name: ''
      }}>
        <AuthContext.Consumer>
          {({ id }) => (
            id !== 0 ? <AuthRoutes/> : <NonAuthRoutes/>
          )}
        </AuthContext.Consumer>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
