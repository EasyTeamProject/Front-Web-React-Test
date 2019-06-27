import React, { Component } from 'react';
import EventDetailForm from '../components/EventCreationTunnel/EventDetailForm';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'


const styles = {
    container:{
        display: 'flex',
        flexDirection: 'column',
    }
}

export class EventCreationTunnel extends Component {
    state = {
        step: 1,
        title: '',
        date: '',
        description: '',
        location: '',
        friends: '',
        budget: '',
        checkList: ''
    }

    //Next step
    nextStep(){
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    //Previous step
    previousStep(){
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    //Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { title, date, description, location, friends, budget, checkList } = this.state;
        const values = { title, date, description, location, friends, budget, checkList };

        switch(step){
            case 1:
                return(
                    <React.Fragment style={styles.container}>
                        <AppBar posotion="static" color="default">
                            <Toolbar>
                                <Typography variant="h6" color="inherit">
                                    Event details
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <EventDetailForm
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            values={values}
                        />
                    </React.Fragment>  
                )
            case 2:
                return <h1>LocationForm</h1>
            case 3:
                return <h1>FriendsForm</h1>
            case 4:
                return <h1>EventCheckList</h1>
            case 5:
                return <h1>BudgetForm</h1>
            case 6:
                return <h1>EventRecap</h1>
        }
    }
}

export default EventCreationTunnel
