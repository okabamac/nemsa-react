import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import OfficeHome from './pages/StaffComponents/OfficeHome';
import AdminHome from './pages/AdminComponents/AdminHome';
import { ContextProvider } from './pages/Context';
import './pages/styles/main.scss';


function App() {
  const [menuOpenState, setMenuOpenState] = useState(true);
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/login" component={LoginPage} />
      <ContextProvider
        value={{
          isMenuOpen: menuOpenState,
          toggleMenu: () => setMenuOpenState(!menuOpenState),
          stateChangeHandler: newState => setMenuOpenState(newState.isOpen)
        }}
      >
        <Route path="/officeHome" component={OfficeHome} />
        <Route path="/adminHome" component={AdminHome} />
      </ContextProvider>
    </Switch>
  );
}

export default App;
