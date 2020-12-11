import React, { Component } from 'react';
import Chat from '../Chat/Chat';
import { Link } from 'react-router-dom';
// import '../organization.css';
import { uid } from 'react-uid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "../../actions/message"
import {addContactUser} from "../../actions/message";

class UserCards extends Component {
     state = {
          userNames: ['Hamin', 'Thuy', 'Umid', 'Mark', 'Matt', 'Gary', 'Benjamin', 'Robert', 'Berk', 'Ethan'],
          chatOn: false
     }

     handleOnClick = () => {
          this.setState({
               chatOn: !this.state.chatOn
          })
     }

     startConv = () => {
         addContactUser(this, {name:"TestUser", email:"test@test.com"});
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
                         <Button size="medium" color="primary" href={ '/user/explorer' }>
                              About Me
                         </Button>
                         <Button size="medium" color="secondary" onClick={this.startConv}>
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