import React, { Component } from 'react';
import { uid } from 'react-uid';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
     state = {
          menuList: ['Your Profile', 'Explore', 'UofT', 'Amazon'] 
     }

     addOrganization = () => {
          this.state.menuList.push('New Organization');
     }
     
     render() {
          const { isAdmin } = this.props; 
          const menus = this.state.menuList.map(menu => {
               if (menu === 'Your Profile') {
                    if (isAdmin === 'true') {
                         return (
                              <Link to={'/admin'}>
                                   <li className="sideBarMenu" key={uid(menu)}>
                                        {menu}
                                   </li>
                              </Link>
                         )
                    } else {
                         return (
                              <Link to={'/user/explorer'}>
                                  <li className="sideBarMenu" key={uid(menu)}>
                                        {menu}
                                   </li> 
                              </Link>
                         )

                    }
               } else if (menu === 'Explore') {
                    if (isAdmin === 'true') {
                         return (
                              <Link to={'/admin'}>
                                   <li className="sideBarMenu" key={uid(menu)}>
                                        {menu}
                                   </li>
                              </Link>
                         )
                    } else {
                         return  (
                              <Link to={'/explore'}>
                                   <li className="sideBarMenu" key={uid(menu)}>
                                        {menu}
                                   </li>
                              </Link>
                         )
                    }
               } else {
                    if (isAdmin === 'true') {
                         return (
                              <Link to={'/admin/user'}>
                                   <li className="sideBarMenu" key={uid(menu)}>
                                        {menu}
                                   </li> 
                              </Link>
                         )
                    } else {
                              return (
                                   <Link to={'/' + menu}>
                                        <li className="sideBarMenu" key={uid(menu)}>
                                             {menu}
                                        </li> 
                                   </Link>
                              )

                    }
               }
          })
          if ( isAdmin === 'true' ) {
               return (
                    <div className="sideBar">
                         <ul className="sideBarMenuList">
                              {menus}
                         </ul>
                    </div>
               );
          } else {
               return (
                    <div className="sideBar">
                         <ul className="sideBarMenuList">
                              {menus}
                         </ul>
                         
                    </div>
               );
          }
     }
}


export default Sidebar;