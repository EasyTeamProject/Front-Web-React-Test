import React, { Component } from 'react';
import { Button, Card, CardActionArea, CardContent, Typography, CardActions } from '@material-ui/core';

const styles = {
    testButton:{
        marginLeft: '400px'
    },
    card: {
        margin: 10,
        maxWidth: '90%'
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
            <div>
                <Card style={styles.card}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.eventTitle}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {this.props.eventSubject}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>                
            </div>
        )
    }
}

export default EventCard;