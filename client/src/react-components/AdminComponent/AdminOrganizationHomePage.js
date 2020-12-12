import { Component } from 'react';
import AdminOrganizationCard from './AdminOrganizationCard';

class AdminOrganizationHomePage extends Component {
     constructor(props) {
          super(props);
          this.props.history.push('/admin');
     }

     render() {
          const {app} = this.props;
          return (
               <div className="pageContainer">
                    <div id="homeHeader"> 
                         <h1>Add Organizations</h1>
                         <AdminOrganizationCard {...this.props} app={app}></AdminOrganizationCard>
                    </div>
               </div>
          );
     }
}

export default AdminOrganizationHomePage;