import React, { Component } from 'react'
import FriendList from '../FriendList';
import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import Axios from 'axios';
import { Link } from 'react-router-dom';


const styles = {
  recap:{
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    margin: '0 auto',
    marginTop: '20vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '400px'
  }
}

export class EventRecap extends Component {
  constructor(props){
    super(props);

   this.sendEventToApi = this.sendEventToApi.bind(this);
  }

  sendEventToApi(){
    var { title, date, friends } = this.props.values;
    var eventData = {
      'name': title,
      'date': date
    };
    Axios.post('/events', eventData, {
      headers: {
        'JWT': localStorage.getItem('token')
      }
    })
    .then((response) => {
      friends.forEach(element => {
        var invitationData = {
          'user_id': element.id
        };
        console.log(response);
        (Axios.post('/events/' + response.data.id + '/invitations', invitationData ,{
          headers:{
            "JWT": localStorage.getItem('token')
          }
        }))
        .catch(function(error){
          console.log("invitation error");
        })
      });
      
    })
    .catch(function(error){
      console.log("event creation error");
    })
  }

  render() {
    const { values } = this.props;
    console.log(values);
    return (
      <React.Fragment>
        <List style={styles.recap}>
          <ListItem>
            <ListItemText
              primary={values.title}
            />
          </ListItem>
          <ListItem>
          <ListItemText
            primary={values.date}
          />
          </ListItem>
          <ListItem>
          <ListItemText
            primary={values.location}
          />
          </ListItem>
          <ListItem>
          <ListItemText
            primary={values.description}
          />
          </ListItem>
          <ListItem>
            <FriendList friendList={values.friends}/>
          </ListItem>
          <ListItem>
            <Link to='/homepage'>
              <Button
                size="large" 
                color="primary"
                onClick={this.sendEventToApi}
                >
                Submit
              </Button>
            </Link>
            
              
          </ListItem>
        </List>
      </React.Fragment>
    )
  }
}

export default EventRecap
