import React, { Component } from 'react'
import FriendList from '../FriendList';
import { List, ListItem, ListItemText } from '@material-ui/core';

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
            <FriendList friendList={values.friends}/>
          </ListItem>
        </List>
      </React.Fragment>
    )
  }
}

export default EventRecap
