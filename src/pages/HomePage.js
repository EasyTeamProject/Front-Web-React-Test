import React, { Component } from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add'
import AppDrawer from '../components/AppDrawer';
import EventCard from '../components/EventCard';



const styles = {
    testCard:{
        marginLeft: '240px'
    }
}

class HomePage extends Component{
    constructor(props){
        super(props);
    }

    getEventData(){
        var data = require('../data/user.json');
        return data;
    }

    render(){
        var json = this.getEventData();
        var arr = [];
        Object.keys(json).forEach(function(key) {
            arr.push(json[key]);
        });
        console.log(arr);

        return(
            <div>
                <AppDrawer/>
                
                <ul style={styles.testCard}>
                    <Fab color="primary" aria-label="Add" style={styles.fab}>
                        <AddIcon />
                    </Fab> New Event
                    {arr.map(item => <EventCard eventId={item.id} eventTitle={item.title} eventDate={item.date} eventPlace={item.place} eventSubject={item.subject}/>)}
                </ul>
            </div>
        );
    }
}

export default HomePage;