import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    marginLeft: 240,
    height: '100%'
  },
  inline: {
    display: 'inline',
  },
  profilePic:{
    height: 62,
    width: 62,
    borderRadius: 31
  }
}));

export default function FriendList() {
    const classes = useStyles();

    function getFriendsData(){
        var data = require('../data/friends.json');
        var arrFriends = [];
        Object.keys(data).forEach(function(key){
            arrFriends.push(data[key]);
        });
        return arrFriends;
    }
        
    return (
        <List className={classes.root}>
                {getFriendsData().map(item=>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            {/* <CardMedia image='../img/avatar/0.png' className={classes.profilePic}/> */}
                            <Avatar alt={item.name} src={require('../img/avatar/0.png')} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.name}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {item.lastMsgTime}
                                    </Typography>
                                    {" " + item.lastMessage}
                                </React.Fragment>
                            }
                        />
                        <Divider variant="inset" component="li" />
                    </ListItem>
                    
                )}
        </List>
    );
}
