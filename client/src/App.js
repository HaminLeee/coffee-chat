import React from 'react';
import Navbar from "./components/Navbar";
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import AdminHomePage from './pages/AdminHomePage';
import UserHomePage from './pages/UserHomePage';
import LoginPage from './pages/LoginPage';
import ExplorePage from './pages/ExplorePage';

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
            <Route exact path='/explore'
                  render={() => <ExplorePage/>}/>
            <Route exact path='/login'
                  render={() => <LoginPage/>}/>
            <Route exact path='/uoft'
                  render={() => <UserHomePage/>}/>
          </Switch>
        </BrowserRouter>
        {/*  <Chat style = {{width: '100rem'}}></Chat> */}
    </div>
  );
}

export default App;
