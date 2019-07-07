import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GoogleSuggest from '../Maps/GoogleSuggest';

const styles = {
    form:{
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
        width: '400px'
    },
    date:{
        width: '200px'
    }
}

export class EventDetailForm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <div style={styles.form}>
                <React.Fragment>
                    <h1>Create your event</h1>
                    <br/>
                    <TextField
                        label='Event Title'
                        onChange={handleChange('title')}
                        defaultValue={values.title}
                    />
                    <br/>
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
                    <br/>
                    <GoogleSuggest
                        handleLocationChange={this.props.handleLocationChange}
                        />
                    <br/>
                    <TextField
                        label='Description'
                        multiline
                        rows='5'
                        onChange={handleChange('description')}
                        defaultValue={values.description}
                    />
                    <br/>
                    <Button 
                        size="large" 
                        color="primary"
                        onClick={this.continue}>
                        Submit
                    </Button>
                </React.Fragment>
            </div>
        )
    }
}

export default EventDetailForm
