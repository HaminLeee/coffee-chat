import { Component } from 'react';
import Chat from '../Chat/Chat';;
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "../../actions/message"
import {addContactUser} from "../../actions/message";
import {getAllUsers} from "../../actions/user";

class UserCards extends Component {
     state = {
          chatOn: false,
          people: []

     }

     async componentDidMount() {
          // Get the organization name from the relative url
          let orgId = window.location.pathname.split("/")[2];
          await getAllUsers(this, orgId);
     }

     handleOnClick = () => {
          this.setState({
               chatOn: !this.state.chatOn
          })
     }

     startConv = (name, email) => {
         addContactUser(this, {name:name, email:email});
     }

     render() {
          const userCards = this.state.people.map((user) => {
               return (
                    <Card className="organizationCard">
                         <CardActionArea>
                         <CardMedia
                              className=""
                              image=""
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
                         <Button size="medium" color="primary" href={ '/user/' + user._id }>
                              About Me
                         </Button>
                         <Button size="medium" color="secondary" onClick={() => this.startConv(user.name, user.email)}>
                              Start a chat!
                         </Button>
                         </CardActions>
                    </Card>

               )
          })
          return (
               <div>
                    <div className="organizationCards">
                         {userCards}
                    </div> 
                    <Chat></Chat>
               </div>
          );
     }
}

export default UserCards;