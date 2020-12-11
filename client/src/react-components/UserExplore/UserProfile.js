import React, { Component } from 'react';
// import '../userProfile.css'
import '../assets/profile_picture.png'
import Chat from '../Chat/Chat';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getAllUsers , updateOrgForm } from '../../actions/organization';


class UserProfile extends Component {
    state = {
        user: 'Thuy',
        description: 'Third year student at UofT',
        chatOn: false
    }

   handleOnClick = () => {
        this.setState({
             chatOn: !this.state.chatOn
        })
   }

    render() {
        return (
            <div >
                <div >
                    <Card className="profileCard">
                         <CardActionArea>
                         <CardMedia
                              className=""
                              image="../assets/profile_picture.png"
                              title="Contemplative Reptile"
                         />
                         <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                              
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
                </div>
                <Chat></Chat>
            </div>
        )
    }
}

export default UserProfile;