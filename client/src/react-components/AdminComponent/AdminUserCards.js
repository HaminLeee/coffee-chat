import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getAllUsers , updateOrgForm } from '../../actions/organization';
import TextField from "@material-ui/core/TextField";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

class AdminUserCards extends Component {
     state = {
          userNames: ['Hamin', 'Thuy', 'Umid', 'Mark', 'Matt', 'Gary', 'Robert' ],
          newUserName: '',
          people: []

     }
     


     addUser = () => {
          this.state.userNames.push(this.state.newUserName);
          let list = this.state.userNames;
          this.setState({
               userNames: list,
          })   
     }

     deleteUser = (user) => {
          let updated = this.state.userNames.filter((u) => u !== user);
          this.setState({
               userNames: updated,
          })
     }

     handleInputChange = e => {
          this.setState({ 
               newUserName: e.target.value,
          })

     }

     render() {
          const userCards = this.state.userNames.map((user) => {
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
                              {user}
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
                         {/* <Button className="delOrgButton" onClick={() => this.kickUser(organization)} size="medium" color="secondary">
                              Delete
                         </Button> */}
                         </CardActions>
                    </Card>
               )
          })
          const {app} = this.props;
          return (
               <div>
                    <div>
                         <form>
                              <label>
                                   <h4>New User Name</h4>
                                   <TextField 
                                        required 
                                        variant="outlined"
                                        placeholder="Enter the email"
                                        minLength={1}
                                        label="Email"
                                        size="small"
                                        onChange={e => updateOrgForm(this, e.target)} 
                                        type="text" 
                                        name="email" />
                              </label>
                         </form>
                         <br></br>
                         <Button
                              variant="contained"
                              color="default"
                              startIcon={<CloudUploadIcon />}
                              color="primary"
                              // onClick={() => addUserToOrg(this, app)}
                         >
                              Add User
                         </Button>
                    </div>
                    <div className="organizationCards">
                         {userCards}
                    </div> 
               </div>
          );
     }
}

export default AdminUserCards;