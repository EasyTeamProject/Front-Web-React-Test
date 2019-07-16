import React, { Component } from 'react'
import FriendList from '../FriendList';
import { List, ListItem, ListItemText, Button } from '@material-ui/core';


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
            <Button
              size="large" 
              color="primary"
              >
                Submit
              </Button>
              
          </ListItem>
        </List>
      </React.Fragment>
    )
  }
}

export default EventRecap
