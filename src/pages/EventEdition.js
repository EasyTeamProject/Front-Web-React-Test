import React, { Component } from 'react';
import EventEditionForm from '../components/EventEditionForm';
import CustomAppBar from '../components/CustomAppBar';
import { Redirect } from 'react-router-dom';

// const styles = {
//     container:{
//         display: 'flex',
//         flexDirection: 'column',
//     }
// }

export class EventEdition extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            date: '',
            description: '',
            location: '',
        }
    }
    

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    handleLocationChange = value => {
        this.setState({ location: value });
    }

    render() {
        const eventId = this.props.eventId;
        const { title, date, description, location, friends } = this.state;
        const values = { title, date, description, location, friends };

        if (localStorage.getItem('token') === null) {
            return <Redirect to='/' />
        }

        return (
            <React.Fragment>
                <CustomAppBar pageTitle="Edit your Event" />
                <EventEditionForm
                    eventId={eventId}
                    handleChange={this.handleChange}
                    handleLocationChange={this.handleLocationChange}
                    values={values}
                />
            </React.Fragment>
        );
    }
}

export default EventEdition
