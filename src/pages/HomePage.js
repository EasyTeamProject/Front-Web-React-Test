import React, { Component } from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ButtonBase from '@material-ui/core/ButtonBase';
import AppDrawer from '../components/AppDrawer';
import EventCard from '../components/EventCard';
import { Link, Redirect } from 'react-router-dom';
import { Slide } from '@material-ui/core';
import { Dialog, AppBar, Toolbar, IconButton, Typography, Divider, List, ListItem, ListItemText, Button } from "@material-ui/core";
import Axios from 'axios';
import ChatPage from './ChatPage';
import EventEdition from './EventEdition';



const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%'
    },
    testCard: {
        width: '100%',
        marginLeft: '240px',
        paddingLeft: '15%',
        paddingRight: '15%',
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
    fields: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'left',
    }
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



class HomePage extends Component {
    constructor(props) {
        super();
        this.state = {
            events: [],
            dialogOpen: [false],
            members: [""],

            currentEventId: 0,

            redirectChat: false,

            redirectFriends: false,

            redirectEventEdition: false
        }
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.addEventId = this.addEventId.bind(this);
        this.closeChat = this.closeChat.bind(this);
        this.redirectToEventEdition = this.redirectToEventEdition.bind(this);
    }

    redirectToEventEdition(){
        this.setState({
            redirectEventEdition: true
        })
    }

    addEventId() {
        var tmp = this.state.dialogOpen;
        tmp.push(false);
        this.setState({
            dialogOpen: tmp
        })
    }

    redirectToChat() {
        this.setState({
            redirectChat: true
        });
    }

    closeChat() {
        this.setState({
            redirectChat: false
        })
    }

    handleOpen(id) {
        var tmp = this.state.dialogOpen;
        tmp[id] = true;
        this.setState({
            dialogOpen: tmp,
            currentEventId: id
        })
    }

    handleClose(item) {
        var tmp = this.state.dialogOpen;
        tmp[item.id] = false;
        this.setState({
            dialogOpen: tmp
        });
        Axios.post("/events")
    }

    componentDidMount() {
        var self = this;
        Axios.get('/events', {
            headers: {
                "JWT": localStorage.getItem('token')
            }
        }
        ).then(function (response) {
            var arrEvents = [];
            var data = response.data;
            Object.keys(data).forEach(function (key) {
                arrEvents.push(data[key]);
                Axios.get('/events/' + data[key].id, {
                    headers: {
                        "JWT": localStorage.getItem('token')
                    }
                }
                ).then(function (response) {
                    var arr = [];
                    var arrMembers = response.data.members;
                    Object.keys(arrMembers).forEach(function (key) {
                        arr.push(arrMembers[key])
                    })
                    self.setState({
                        members: arr
                    })
                }
                ).catch(function (error) {
                    console.log(error);
                })
            });
            self.setState({
                events: arrEvents,
            });
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        if (localStorage.getItem('token') === null) {
            return <Redirect to='/' />
        }
        if (this.state.redirectChat) {
            return (
                <ChatPage closeChat={this.closeChat} currentEventId={this.state.currentEventId} />
            )
        }
        if(this.state.redirectEventEdition){
            return(
                <EventEdition eventId={this.state.currentEventId}/>
            )
        }
        // if(this.state.redirectFriends) {
        //     return(
        //         <FriendsUpdate eventId={this.state.currentEventId} isInvited={this.state.members}/>
        //     )
        // }
        return (
            <div style={styles.container}>
                <AppDrawer />
                <ul style={styles.testCard}>
                    <Link to="/createEvent">
                        <Fab color="primary" aria-label="Add" style={styles.fab} onClick="">
                            <AddIcon />
                        </Fab>
                    </Link>
                    {this.state.events.reverse().map(item =>
                        <div>
                            {
                                () => this.addEventId
                            }
                            <ButtonBase style={styles.buttonBase} className={"card" + item.id} onClick={() => this.handleOpen(item.id)}>
                                <EventCard eventId={item.id} eventTitle={item.name} eventDate={item.date} eventPlace={item.place} eventSubject={item.subject} />
                            </ButtonBase>
                            <Dialog fullScreen open={this.state.dialogOpen[item.id]} onClose={this.handleClose} TransitionComponent={Transition}>
                                <AppBar style={styles.appBar}>
                                    <Toolbar>
                                        <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="Close">
                                            {/* <CloseIcon /> */}
                                        </IconButton>
                                        <Typography variant="h3" style={styles.title} >
                                            {item.name}
                                        </Typography>
                                        <Typography variant="h6" style={styles.title}>
                                            {item.date}
                                        </Typography>
                                        <Button color="inherit" onClick={() => this.redirectToChat()}>
                                            chat
                                        </Button>
                                        <Button color="inherit" onClick={() => this.redirectToEventEdition()}>
                                            edit
                                        </Button>
                                        <Button color="inherit" onClick={() => this.handleClose(item)}>
                                            back
                                        </Button>
                                    </Toolbar>
                                </AppBar>
                                <List>
                                    <ListItem>
                                        <ListItemText primary="Place" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText secondary={item.subject}  />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemText primary="Description" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText secondary={item.information} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Members" />
                                    </ListItem>
                                    {this.state.members.map(member =>
                                        <ListItem>
                                            <ListItemText secondary={member.first_name} />
                                        </ListItem>
                                    )}
                                    {/* <ListItem>
                                        <Button onClick={() => this.redirectToFriends()}>
                                            add friend
                                        </Button>
                                    </ListItem> */}
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