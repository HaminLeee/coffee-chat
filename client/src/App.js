import React from 'react';
import Navbar from "./components/Navbar";
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import AdminHomePage from './pages/AdminHomePage';
import UserHomePage from './pages/UserHomePage';
import SideBar from './components/Sidebar';

function App() {
  return (
    <div >
      <Navbar id="navbar"></Navbar>
      <BrowserRouter>
          <Switch>
            <Route exact path='/'
                  render={() => <UserHomePage />}/>
            <Route exact path='/admin'
                  render={() => <AdminHomePage/>}/>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
