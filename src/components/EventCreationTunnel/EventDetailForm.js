import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    }
}

export class EventDetailForm extends Component {
    continue(e){
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
                    <TextField
                        label='Date'
                        onChange={handleChange('date')}
                        defaultValue={values.date}
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
                    <TextField
                        label='Location'
                        onChange={handleChange('location')}
                        defaultValue={values.location}
                    />
                    <br/>
                    <Button size="large" color="primary">
                        Submit
                    </Button>
                </React.Fragment>
            </div>
        )
    }
}

export default EventDetailForm
