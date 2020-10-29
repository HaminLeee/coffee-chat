import React, { Component } from 'react';

class Sidebar extends Component {
     state = {
          menuList: ['Your Profile', 'Explore', 'Organization 1', '...']
     }
     render() {
          const menus = this.state.menuList.map(menu => {
               return (
                    <li className="sideBarMenu">{menu}</li>
               )
          })
          return (
               <div className="sideBar">
                    <ul className="sideBarMenuList">
                         {menus}
                    </ul>
                    
               </div>
          );
     }
}

export default Sidebar;