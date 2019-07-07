import React, { Component } from 'react';
import FriendList from '../FriendList';

const styles = {
  container:{
    display: 'flex',
    flexDirection: 'row',
  }
}

export class FriendsForm extends Component {
  state = {
    notInvited: this.getFriendsData(),
    invited: []
  }

  getFriendsData(){
    var data = require('../../data/friends.json');
    var arrFriends = [];
    Object.keys(data).forEach(function(key){
        arrFriends.push(data[key]);
    });
    return arrFriends;
  }

  render() {
    const {invited, notInvited} = this.state;
    return (
      <div style={styles.container}>
        <FriendList friendList={notInvited}/>
        <FriendList friendList={invited}/>
      </div>
    )
  }
}

export default FriendsForm
