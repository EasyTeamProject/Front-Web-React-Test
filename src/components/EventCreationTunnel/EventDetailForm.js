import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
    form:{
        marginTop: 100,
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        width: 300
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
                </React.Fragment>
            </div>
        )
    }
}

export default EventDetailForm
