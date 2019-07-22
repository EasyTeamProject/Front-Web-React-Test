import React, { Component } from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core';
import Axios from 'axios';
import FriendList from '../components/FriendList';
import AppDrawer from '../components/AppDrawer';
import { Redirect } from 'react-router-dom';

const styles = {
    profileBox: {
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        margin: '0 auto',
        marginTop: '20vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '400px'
    },
    profileFields: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left'
    },
    items: {
        width: '80%'
    }
}



export class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        var self = this;
        Axios.get('/friends', {
            headers: {
                "JWT": localStorage.getItem('token')
            }
        }
        ).then(function (response) {
            var arrFriends = [];
            var data = response.data;
            Object.keys(data).forEach(function (key) {
                if (key !== '0') {
                    arrFriends.push(data[key]);
                }
            });
            self.setState({
                friends: arrFriends
            });
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        if(localStorage.getItem('token') === null){
            return <Redirect to='/'/>
        }

        return (
            <div>
                <AppDrawer/>
                <List style={styles.profileBox}>
                    <ListItem style={styles.profileFields}>
                        <ListItemText
                            secondary={"Name: "}
                            style={styles.items}
                        />
                        <ListItemText
                            primary={localStorage.getItem('name')}
                        />
                    </ListItem>
                    <ListItem style={styles.profileFields}>
                        <ListItemText
                            secondary={"Email : "}
                            style={styles.items}
                        />
                        <ListItemText
                            primary={localStorage.getItem('email')}
                        />
                    </ListItem>
                    <ListItem style={styles.profileFields}>
                        <ListItemText
                            secondary={"Member since : "}
                            style={styles.items}
                        />
                        <ListItemText
                            primary={localStorage.getItem('created')}
                        />
                    </ListItem>
                    <ListItem style={styles.profileFields}>
                        <ListItemText
                            secondary={"Friends : "}
                            style={styles.items}
                        />
                        <FriendList friendList={this.state.friends} />
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default ProfilePage
