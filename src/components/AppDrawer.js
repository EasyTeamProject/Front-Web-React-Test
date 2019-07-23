import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, ListItem, ListItemText, Avatar } from '@material-ui/core';
import { List } from '@material-ui/core';
import { NavLink, Link } from 'react-router-dom';


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  }
}));


export default function AppDrawer() {
  const classes = useStyles();

  function logOut(){
    localStorage.clear();
  }

  return (
    <Drawer
      className={classes.toolbar}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper
      }}
      anchor='left'
    >
      <div className={classes.toolbar} />
      <List>
        <Avatar style={{width:150, height:150}} alt="logo" src={require('../img/logo.png')}/>
        <ListItem button key={localStorage.getItem('name')}>
          <ListItemText primary={localStorage.getItem('name')} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <NavLink to="/homepage" style={{ textDecoration: "none" }}>
          <ListItem button key='Events'>
            <ListItemText primary='Events' />
          </ListItem>
        </NavLink>
        <NavLink to="/profile" style={{ textDecoration: "none" }}>
          <ListItem button key='Profile'>
            <ListItemText primary='Profile' />
          </ListItem>
        </NavLink>
      </List>
      <Divider />
      <List>
        <Link to='/termofuses'>
          <ListItem>
            Term of Uses
          </ListItem>
        </Link>
        <Link to="/">
          <ListItem button key="Logout">
            <ListItemText primary="Log out" onClick={() => logOut()}/>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}