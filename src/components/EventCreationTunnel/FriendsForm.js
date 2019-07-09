import React, { Component } from 'react';
import { List, ListItem, Button, ListItemAvatar, Avatar, ListItemText, Divider } from '@material-ui/core';

const styles = {
  container:{
    display: 'flex',
    flexDirection: 'row',
  },
  friends:{
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    margin: '0 auto',
    marginTop: '20vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '400px'
  },
  button:{
    textAlign: 'left',
    width: '100%'
  },
  submitButton:{
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '200px'
  }
}

export class FriendsForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      notInvited: this.getFriendsData(),
      invited: []
    }

    this.addFriend = this.addFriend.bind(this);
    this.removeFriend = this.removeFriend.bind(this);
  }

  addFriend(friend){
    var newNotInvited = this.state.notInvited;
    var newInvited = this.state.invited;
    for(var i = 0; i < newNotInvited.length ; i++){
      if( newNotInvited[i] === friend){
        newNotInvited.splice(i, 1);
        newInvited.push(friend);
      }
    }
    this.setState({
      notInvited: newNotInvited,
      invited: newInvited,
      friends: newInvited
    });
    
    this.props.updateFriends(newInvited);
  }

  removeFriend(friend){
    var newNotInvited = this.state.notInvited;
    var newInvited = this.state.invited;
    for(var i = 0; i < newInvited.length ; i++){
      if( newInvited[i] === friend){
        newInvited.splice(i, 1);
        newNotInvited.push(friend);
      }
    }
    this.setState({
      notInvited: newNotInvited,
      invited: newInvited,
    });
  }

  getFriendsData(){
    var data = require('../../data/friends.json');
    var arrFriends = [];
    Object.keys(data).forEach(function(key){
        arrFriends.push(data[key]);
    });
    return arrFriends;
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
}

  render() {
    return (
      <div>
        <div style={styles.container}>
        <List style={styles.friends}>
          {this.state.notInvited.map(item=>
            <ListItem alignItems="flex-start" >
                <Button
                    size="large" 
                    color="primary"
                    style={styles.button}
                    onClick={this.addFriend.bind(this, item)}
                >
                    <ListItemAvatar>
                        {/* <CardMedia image='../img/avatar/0.png' className={classes.profilePic}/> */}
                        <Avatar alt={item.name} src={require('../../img/avatar/0.png')} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={item.name}
                    />
                    <Divider variant="inset" component="li" />
                </Button>
            </ListItem>
          )}
        </List>
        <List style={styles.friends}>
          {this.state.invited.map(item=>
            <ListItem alignItems="flex-start" >
                <Button
                    size="large" 
                    color="primary"
                    style={styles.button}
                    onClick={this.removeFriend.bind(this, item)}
                >
                    <ListItemAvatar>
                        {/* <CardMedia image='../img/avatar/0.png' className={classes.profilePic}/> */}
                        <Avatar alt={item.name} src={require('../../img/avatar/0.png')} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={item.name}
                    />
                    <Divider variant="inset" component="li" />
                </Button>
            </ListItem>
          )}
        </List>
        {/* <FriendList friendList={notInvited} addFriend={this.addFriend}/>
        <FriendList friendList={invited}/> */}
      </div>
      <Button 
          size="large" 
          color="primary"
          onClick={this.continue}
          style={styles.submitButton}>
          Submit
      </Button>
      </div>
      
    )
  }
}

export default FriendsForm
