import React, { Component } from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ButtonBase from '@material-ui/core/ButtonBase';
import AppDrawer from '../components/AppDrawer';
import EventCard from '../components/EventCard';
import { Link } from 'react-router-dom';
import { Slide } from '@material-ui/core';
import { Dialog, AppBar, Toolbar, IconButton, Typography, Divider, List, ListItem, ListItemText, Button } from "@material-ui/core";



const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%'
    },
    testCard: {
        width: '100%',
        marginLeft: '240px',
        display: 'flex',
        flexFlow: 'column'
    },
    buttonBase: {
        width: '100%',
        justifyContent: 'left'
    },
    appBar: {
        position: 'relative',
    },
    title: {
        flex: 1,
    },
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogOpen: []
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.addEventId = this.addEventId.bind(this);
    }

    addEventId(){
        var tmp = this.state.dialogOpen;
        tmp.push(false);
        this.setState({
            dialogOpen: tmp
        })
    }

    handleOpen(id) {
        var tmp = this.state.dialogOpen;
        tmp[id] = true;
        this.setState({
            dialogOpen: tmp
        })
    }

    handleClose(id) {
        var tmp = this.state.dialogOpen;
        tmp[id] = false;
        this.setState({
            dialogOpen: tmp
        })
    }

    // getDetailsEvent(item) {
    //     this.handleOpen();
    //     return (
            
    //     )
    // }

    getEventData() {
        var data = require('../data/events.json');
        return data;
    }

    render() {
        var json = this.getEventData();
        var arrEvents = [];
        Object.keys(json).forEach(function (key) {
            arrEvents.push(json[key]);
        });
        return (
            <div style={styles.container}>
                <AppDrawer />
                <ul style={styles.testCard}>
                    <Link to="/createEvent">
                        <Fab color="primary" aria-label="Add" style={styles.fab} onClick="">
                            <AddIcon />
                        </Fab>
                    </Link>
                    {arrEvents.map(item =>
                        <div>
                            {
                                () => this.addEventId
                            }
                            <ButtonBase style={styles.buttonBase} className={"card" + item.id} onClick={() => this.handleOpen(item.id)}>
                                <EventCard eventId={item.id} eventTitle={item.title} eventDate={item.date} eventPlace={item.place} eventSubject={item.subject} />
                            </ButtonBase>
                            <Dialog fullScreen open={this.state.dialogOpen[item.id]} onClose={this.handleClose} TransitionComponent={Transition}>
                                <AppBar style={styles.appBar}>
                                    <Toolbar>
                                        <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="Close">
                                            {/* <CloseIcon /> */}
                                        </IconButton>
                                        <Typography variant="h3" style={styles.title}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="h6" style={styles.title}>
                                            {item.date}
                                        </Typography>
                                        <Button color="inherit" onClick={() => this.handleClose(item.id)}>
                                            save
                                        </Button>
                                    </Toolbar>
                                </AppBar>
                                <List>
                                    <ListItem button>
                                        <ListItemText primary="Location" secondary={item.location}/>
                                    </ListItem>
                                    <Divider />
                                    <ListItem button>
                                        <ListItemText primary="Description" secondary={item.description}/>
                                    </ListItem>
                                </List>
                            </Dialog>
                        </div>

                    )}
                </ul>
            </div>
        );
    }
}

export default HomePage;