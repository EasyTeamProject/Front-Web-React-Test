import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, ListItem, ListItemText } from '@material-ui/core';
import { List } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
}));


export default function AppDrawer(){
  const classes = useStyles();

    return(
        <Drawer
            className={classes.toolbar}
            variant='permanent'
            classes={{
              paper: classes.drawerPaper
            }}
            anchor='left'
        >
          <div className = {classes.toolbar}/>  
          <List>
              {['APPLOGO', 'USERNAME'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text}/>
              </ListItem>
            ))}
          </List>
          <Divider/>
          <List>
            {['Profile', 'Travels', 'Friends', 'Notifications'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text}/>
              </ListItem>
            ))}
          </List>
          <Divider/>
          <List>
            {['Log Out'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text}/>
              </ListItem>
            ))}
          </List>
        </Drawer>
    );
}