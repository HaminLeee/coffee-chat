import React from 'react';
import Navbar from "./react-components/Navbar";
import LoginNavbar from "./react-components/Navbar/LoginNavbar";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { checkSession } from "./actions/user";
import UserHomePage from './react-components/UserCard/UserHomePage';
import LoginPage from './react-components/Login';
import Dashboard from './react-components/UserExplore/Dashboard';
import AdminOrganizationHomePage from './react-components/AdminComponent/AdminOrganizationHomePage';
import AdminUserHomePage from './react-components/AdminComponent/AdminUserHomePage';
import UserExplorerPage from './react-components/UserExplore/UserExplorerPage';
import SplashPage from './react-components/LandingPage';
import Signup from './react-components/Signup';

class App extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  currentUser: null,
                  isAdmin: null
            } 
            checkSession(this); // sees if a user is logged in.
      }
      
 
      
      render() {
            let { currentUser, isAdmin } = this.state;
            isAdmin = currentUser === 'admin' ? true : false;
            const NavbarComp = ({ currentUser }) => {
                  if (!currentUser) {
                        return <LoginNavbar id="navbar" app={this}/>;
                  }
                  return <Navbar id="navbar" app={this}/>;
                  
            };
            console.log(this)
            return (
                  <div id="app">
                        <BrowserRouter>
                              <NavbarComp currentUser={this.state.currentUser}/>
                              <Switch>
                                    <Route
                                    exact path={["/login", "/dashboard", "/admin"] /* any of these URLs are accepted. */ }
                                    render={ props => (
                                          <div>
                                                { /* Different componenets rendered depending on if someone is logged in. */}
                                                {!currentUser ? <LoginPage {...props} app={this} /> : !isAdmin ? <Dashboard {...props} app={this}/> : <AdminOrganizationHomePage {...props} app={this}/>}
                                          </div>              
                                          
                                    )}
                                    />
            
                                    <Route exact path='/'
                                          render={() => <SplashPage/>} />
                                    <Route exact path='/signup'
                                          render={props => <Signup {...props}/>} />
                                    <Route exact path='/explore'
                                          render={() => <UserHomePage app={this}/>} />
                                    <Route exact path='/admin/user'
                                          render={props => (
                                                <div>
                                                       <AdminUserHomePage {...props} app={this}/> 
                                                </div>
                                                )
                                          }
                                    />
                                     
                                    <Route exact path='/organization/:orgName'
                                          component={UserHomePage}/>
                                    <Route exact path='/user/explorer'
                                          render={props => (
                                                <div>
                                                      {!currentUser ? <LoginPage {...props} app={this}/> : <UserExplorerPage {...props} app={this}/>}
                                                </div>
                                          ) 
                                    }/>
            
                                    { /* 404 if URL isn't expected. */}
                                    <Route render={() => <div>404 Not found</div>} />
            
                              </Switch>
                        </BrowserRouter>
                  </div>
        );
      }
}

export default App;
