import React, { Component } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const styles = {
    container:{
        float: 'left',
        width: '100%',
        textAlign: 'left',
        position: 'relative',
    },
    testButton:{
        marginLeft: '400px'
    },
    card: {
        margin: 10,
    },
    media:{
        height: 140
    }
}

class EventCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            eventId: this.props.eventId,
            eventTitle: this.props.eventTitle,
            eventDate: this.props.eventDate,
            eventPlace: this.props.eventPlace,
            eventSubject: this.props.eventSubject
        }
    }

    render(){
        return(
            <div style={styles.container}>
                <Card style={styles.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.eventTitle}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.eventSubject}
                        </Typography>
                    </CardContent>
                </Card>                
            </div>
        )
    }
}

export default EventCard;