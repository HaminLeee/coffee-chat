import React, { Component } from 'react';

class Sidebar extends Component {
     state = {
          menuList: ['Your Profile', 'Explore', 'Organization 1', 'Organization 2'] 
     }

     addOrganization = () => {
          this.state.menuList.push('New Organization');
     }
     
     render() {
          const { isAdmin } = this.props; 
          const menus = this.state.menuList.map(menu => {
               return (
                    <li className="sideBarMenu">{menu}</li>
               )
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