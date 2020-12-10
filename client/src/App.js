import React from 'react';
import Navbar from "./react-components/Navbar";
import LoginNavbar from "./react-components/Navbar/LoginNavbar";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { checkSession } from "./actions/user";
import UserHomePage from './react-components/UserCard/UserHomePage';
import LoginPage from './react-components/Login';
import ExplorePage from './react-components/UserExplore/ExplorePage';
import AdminOrganizationHomePage from './react-components/AdminCard/AdminOrganizationHomePage';
import AdminUserHomePage from './react-components/AdminCard/AdminUserHomePage';
import UserExplorerPage from './react-components/UserExplore/UserExplorerPage';
import SplashPage from './react-components/LandingPage';
import Signup from './react-components/Signup';

class App extends React.Component {
      constructor(props) {
            super(props);
            checkSession(this); // sees if a user is logged in.
      }
      
      // global state passed down includes the current logged in user.
      state = {
            currentUser: null,
            isAuthenticated: false
      }
      componentDidMount() {
            if (this.state.currentUser) {
                  this.setState({
                        isAuthenticated: true
                  })
            }
      }
      
      render() {
            const { currentUser, isAuthenticated } = this.state;
            const NavbarComp = ({ currentUser }) => {
                  if (!currentUser) {
                        return <LoginNavbar id="navbar" app={this}/>;
                  }
                  return <Navbar id="navbar" app={this}/>;
                  
            };
            return (
            <div id="app">
                  <BrowserRouter>
                        <NavbarComp currentUser={this.state.currentUser}/>
                        <Switch>
                              <Route
                              exact path={["/login", "/dashboard"] /* any of these URLs are accepted. */ }
                              render={ props => (
                                    <div>
                                          { /* Different componenets rendered depending on if someone is logged in. */}
                                          {!currentUser ? <LoginPage {...props} app={this} /> : <ExplorePage {...props} app={this} />}
                                    </div>              
                                    
                              )}
                              />
      
                              <Route exact path='/'
                                    render={() => <SplashPage/>} />
                              <Route exact path='/signup'
                                    render={props => <Signup {...props}/>} />
                              <Route exact path='/explore'
                                    render={() => <UserHomePage/>} />
                              <Route exact path='/admin'
                                    render={() => <AdminOrganizationHomePage/>}/>
                              <Route exact path='/admin/user'
                                    render={() => <AdminUserHomePage/>}/>     
                              <Route exact path='/organization/:orgName'
                                    component={UserHomePage}/>
                              <Route exact path='/user/explorer'
                                    render={() => <UserExplorerPage/>}/>
      
                              { /* 404 if URL isn't expected. */}
                              <Route render={() => <div>404 Not found</div>} />
      
                        </Switch>
                  </BrowserRouter>
            </div>
        );
      }
}

export default App;
