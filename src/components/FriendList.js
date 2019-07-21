import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//     marginLeft: 240,
//     height: '100%'
//   },
  inline: {
    display: 'inline',
  },
  profilePic:{
    height: 62,
    width: 62,
    borderRadius: 31
  },
  friends:{
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%'
  },
  button:{
      textAlign: 'left',
      width: '100%'
  }
}));

export default function FriendList(props) {
    const classes = useStyles();
    const friends = props.friendList;
    
    return (
        
        <List className={classes.friends}>
                {friends.map(item=>
                    <ListItem alignItems="flex-start">
                        <Button
                            size="large" 
                            color="primary"
                            className={classes.button}
                        >
                            <ListItemAvatar>
                                {/* <CardMedia image='../img/avatar/0.png' className={classes.profilePic}/> */}
                                <Avatar alt={item.name} src={require('../img/avatar/0.png')} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.name}
                            />
                            <Divider variant="inset" component="li" />
                        </Button>
                        
                    </ListItem>
                    
                )}
        </List>
    );
}
