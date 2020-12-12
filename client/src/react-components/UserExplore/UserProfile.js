import React, { Component } from 'react';
// import '../userProfile.css'
import './assets/thanos.jpg';
import Chat from '../Chat/Chat';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getUser } from '../../actions/user';


class UserProfile extends Component {
    state = {
        user: 'Thuy',
        occupation: 'Third year student at UofT',
    }


   async componentDidMount() {
        let id = window.location.pathname.split("/")[2];
        await getUser(this, id)
   } 

    render() {
        return (
            <div >
                <div >
                    <Card className="profileCard">
                         <CardActionArea>
                         <CardMedia
                              className=""
                              style = {{ height: 0, paddingTop: '56%'}}
                              image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                              title="Profile Pic"
                         />
                         <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                              
                              </Typography>
                              <Typography variant="body2"  component="p">
                              {this.state.occupation}
                              </Typography>
                         </CardContent>
                         </CardActionArea>
                         <CardActions>
                         {/* should be /admin/organization/:id soon */}
                         <Button size="medium" color="primary">
                              Message
                         </Button>
                         
                         </CardActions>
                    </Card>
                </div>
                <Chat></Chat>
            </div>
        )
    }
}

export default UserProfile;