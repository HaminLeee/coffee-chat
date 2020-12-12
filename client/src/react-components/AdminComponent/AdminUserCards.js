import { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { updateOrgForm } from '../../actions/organization';
import { getAllUsers, kickUserFromOrganization} from '../../actions/user';
import TextField from "@material-ui/core/TextField";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Chat from '../Chat/Chat';

class AdminUserCards extends Component {
     state = {
          newUserName: '',
          people: [],
          
     }
     
     async componentDidMount() {
          let orgId = window.location.pathname.split("/")[2];
          await getAllUsers(this, orgId);
     }




     render() {
          const userCards = this.state.people.map((user) => {
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
                              {user.name}
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                              {user.occupation}
                              </Typography>
                         </CardContent>
                         </CardActionArea>
                         <CardActions>
                         {/* should be /admin/organization/:id soon */}
                         <Button size="medium" color="primary" href={"/user/" + user._id}>
                              More Information 
                         </Button>
                         <Button className="delOrgButton" 
                                   onClick={() => kickUserFromOrganization(this, user._id, window.location.pathname.split('/')[2])} 
                                   size="medium" 
                                   color="secondary">
                              Delete
                         </Button>
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
                              <br></br>
                              <br></br>
                              <Button
                                   variant="contained"
                                   color="default"
                                   startIcon={<CloudUploadIcon />}
                                   color="primary"
                                   // onClick={() => joinOrganization(this, app)}
                              >
                                   Add User (Not fully implemented)
                              </Button>
                         </form>
                         <br></br>
                         
                    </div>
                    <div className="organizationCards">
                         {userCards}
                    </div> 
                    <Chat></Chat>
               </div>
          );
     }
}

export default AdminUserCards;