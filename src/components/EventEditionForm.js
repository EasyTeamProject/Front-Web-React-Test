import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GoogleSuggest from './Maps/GoogleSuggest';
import Axios from 'axios';


const styles = {
    form: {
        // marginTop: 100,
        // display: 'flex',
        // flexDirection: 'column',
        // flexWrap: 'wrap',
        // width: 300,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        margin: '0 auto',
        marginTop: '20vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        maxWidth: '400px'
    },
    date: {
        width: '200px'
    }
}

export class EventEditionForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            edited: false
        }

        this.submit = this.submit.bind(this);
    }

    submit(){
        var { title, date, location, description } = this.props.values;
        var { eventId } = this.props;
        var eventData = {
            'name': title,
            'date': date,
            'subject': location,
            'information': description
        };
        var self = this;
        Axios.patch('/events/' + eventId, eventData, {
            headers: {
                'JWT': localStorage.getItem('token')
            }
        })
        .then((response) => {
            self.setState({
                edited: true
            })
        })
        .catch(function (error) {
            console.log("event edition error : " + error);
        })
    }

    render() {
        if(this.state.edited){
            return(
                window.location.reload()
            )
        }
        const { values, handleChange } = this.props;
        return (
            <div style={styles.form}>
                <React.Fragment>
                    <h1>Edit your event</h1>
                    <br />
                    <TextField
                        label='Event Title'
                        onChange={handleChange('title')}
                        defaultValue={values.title}
                    />
                    <br />
                    {/* <KeyboardDatePicker
                        margin="normal"
                        label="Date"
                        value={values.date}
                        onChange={handleChange('date')}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    /> */}
                    <TextField
                        style={styles.date}
                        label='Date'
                        type="date"
                        onChange={handleChange('date')}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        defaultValue={values.date}
                    />
                    <br />
                    <GoogleSuggest
                        handleLocationChange={this.props.handleLocationChange}
                    />
                    <br />
                    <TextField
                        label='Description'
                        multiline
                        rows='5'
                        onChange={handleChange('description')}
                        defaultValue={values.description}
                    />
                    <br />
                    <Button
                        size="large"
                        color="primary"
                        onClick={this.submit}>
                        Submit
                    </Button>
                </React.Fragment>
            </div>
        )
    }
}

export default EventEditionForm
