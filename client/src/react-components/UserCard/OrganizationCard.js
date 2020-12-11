import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/organization.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getAllOrganization } from '../../actions/organization';

class OrganizationCard extends Component {
     constructor(props) {
          super(props);
          this.state = {
               name: "",
               description: "",
               organizations: [],
          };
          this.props.history.push('/dashboard')
     }
     async componentDidMount() {
          const organizations = await getAllOrganization(this);
          await console.log(organizations)
     }


     render() {
          console.log(this.state.organizations);
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
                                   {organization.name} 
                                   </Typography>
                                   <Typography variant="body2" color="textSecondary" component="p">
                                   {organization.description}
                                   </Typography>
                              </CardContent>
                         </CardActionArea>
                         <CardActions>
                              <Button size="medium" color="primary" href={ '/organization/' + organization }>
                                   Explore
                              </Button>
                              <Button size="medium" color="danger" href={ '/organization/' + organization }>
                                   Follow
                              </Button>
                         </CardActions>
                    </Card>
               )
          })
          return (
              <div className="organizationCards">
                   {organizationCards}
              </div>
          );
     }
}

export default OrganizationCard;