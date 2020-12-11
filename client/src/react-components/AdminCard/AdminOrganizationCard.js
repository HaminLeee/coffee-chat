import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { addOrganization, checkSession, updateOrgForm } from '../../actions/organization';
import TextField from "@material-ui/core/TextField";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


class AdminOrganizationCard extends Component {
     constructor(props) {
          super(props);
          this.state = {
               name: "",
               description: "",
               organizations: ['UofT', 'CSC369', 'CSSU', 'CSC309', 'Trinity College', 'Arts & Science', 'CSC108', 'CSC-TAs'],
          }

          // this.state = {
          //      newOrganizationName: "",
          //      error: ""
          // }
          // this.addOrganization = this.addOrganization.bind(this);
          this.deleteOrganization = this.deleteOrganization.bind(this);
          // this.handleInputChange = this.handleInputChange.bind(this);
     }





     // addOrganization = () => {
     //      if (this.state.newOrganizationName.length > 0) {
     //           this.state.organizations.push(this.state.newOrganizationName);
     //           let list = this.state.organizations;
     //           this.setState({
     //                organizations: list,
     //                error: ""
     //           })
     //      } else {
     //           this.setState({
     //                error: "Input at least one character"
     //           })
     //      }
     // }

     deleteOrganization = (organization) => {
          let updated = this.state.organizations.filter((org) => org !== organization);

          this.setState({
               organizations: updated
          })
     }



     render() {
          const {app} = this.props;
          const organizationCards = this.state.organizations.map((organization) => {
               return (
                    <Card className="organizationCard">
                         <CardActionArea>
                         <CardMedia
                              className=""
                              image="/static/images/cards/contemplative-reptile.jpg"
                              title="Contemplative Reptile"
                         />
                         <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                              {organization}
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                              across all continents except Antarctica
                              </Typography>
                         </CardContent>
                         </CardActionArea>
                         <CardActions>
                         {/* should be /admin/organization/:id soon */}
                         <Button size="medium" color="primary" href="/admin/user">
                              View Members
                         </Button>
                         <Button className="delOrgButton" onClick={() => this.deleteOrganization(organization)} size="medium" color="secondary">
                              Delete
                         </Button>
                         </CardActions>
                    </Card>
               )
          })
          return (
               <div>
                    <div>
                         <form>
                              <label>
                                   <h4>New Organization Name</h4>
                                   <TextField 
                                        required 
                                        variant="outlined"
                                        placeholder="Enter the Name"
                                        minLength={1}
                                        size="small"
                                        label="Name"
                                        onChange={e => updateOrgForm(this, e.target)} 
                                        type="text" 
                                        name="name" />
                                   <br></br>
                                   <br></br>
                                   <TextField 
                                        required
                                        name="description" 
                                        variant="outlined"
                                        label="Description"
                                        multiline
                                        placeholder="Add a short description"
                                        rows={3}
                                        size="large"
                                        minLength={3}
                                        onChange={e => updateOrgForm(this, e.target)} 
                                        type="text" 
                                   />
                                   {/* {this.state.error.length > 1 && <h5>{this.state.error}</h5>} */}
                              </label>
                         </form>
                         <br></br>
                         <Button
                              variant="contained"
                              color="default"
                              startIcon={<CloudUploadIcon />}
                              color="primary"
                              onClick={() => addOrganization(this, app)}
                         >
                              Add Organization
                         </Button>
                     
                    </div>
                    <div className="organizationCards">
                         {organizationCards}
                    </div>
               </div>
          );
     }
}

export default AdminOrganizationCard;