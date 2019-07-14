import React, { Component } from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ButtonBase from '@material-ui/core/ButtonBase';
import AppDrawer from '../components/AppDrawer';
import EventCard from '../components/EventCard';
import { Link } from 'react-router-dom';



const styles = {
    container:{
        display: 'flex',
        flexDirection: 'row',
        height: '100%'
    },
    testCard:{
        width: '100%',
        marginLeft: '240px',
        display: 'flex',
        flexFlow: 'column'
    },
    buttonBase:{
        width: '100%',
        justifyContent: 'left'
    }
}

class HomePage extends Component{

    getEventData(){
        var data = require('../data/events.json');
        return data;
    }


    render(){
        var json = this.getEventData();
        var arrEvents = [];
        Object.keys(json).forEach(function(key) {
            arrEvents.push(json[key]);
        });
        return(
            <div style={styles.container}>
                <AppDrawer/>                
                <ul style={styles.testCard}>
                    <Link to="/createEvent">
                        <Fab color="primary" aria-label="Add" style={styles.fab} onClick="">
                            <AddIcon />
                        </Fab>
                    </Link>
                    {arrEvents.map(item => 
                        <ButtonBase style={styles.buttonBase} className={"card"+item.id}>
                            <EventCard eventId={item.id} eventTitle={item.title} eventDate={item.date} eventPlace={item.place} eventSubject={item.subject}/>
                        </ButtonBase>)}
                </ul>

                {/* <FriendList/> */}
            </div>
        );
    }
}

export default HomePage;