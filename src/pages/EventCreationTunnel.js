import React, { Component } from 'react';
import EventDetailForm from '../components/EventCreationTunnel/EventDetailForm';
import CustomAppBar from '../components/CustomAppBar';
import FriendsForm from '../components/EventCreationTunnel/FriendsForm';
import EventRecap from '../components/EventCreationTunnel/EventRecap';


// const styles = {
//     container:{
//         display: 'flex',
//         flexDirection: 'column',
//     }
// }

export class EventCreationTunnel extends Component {
    state = {
        step: 1,
        title: '',
        date: '',
        description: '',
        location: '',
        friends: [],
    }

    //Next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    //Previous step
    previousStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    updateFriends = friends =>{
        this.setState({
            friends: friends
        });
    }

    //Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    handleLocationChange = value => {
        this.setState({location: value});
    }

    render() {
        const { step } = this.state;
        const { title, date, description, location, friends, budget, checkList } = this.state;
        const values = { title, date, description, location, friends, budget, checkList };

        switch(step){
            case 1:
                return(
                    <React.Fragment>
                        <CustomAppBar pageTitle="Create your Event" />
                        <EventDetailForm
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            handleLocationChange={this.handleLocationChange}
                            values={values}
                        />
                    </React.Fragment>
                )
            case 2:
                return(
                    <React.Fragment>
                        <CustomAppBar pageTitle="Who's coming ?"/>
                        <FriendsForm nextStep={this.nextStep} updateFriends={this.updateFriends}/>
                    </React.Fragment>
                    // <React.Fragment style={styles.container}>
                    //     <CustomAppBar pageTitle="Pick the Place !" step={this.state.step}/>
                    //     <GoogleSuggest style={styles.map}/>
                    //     <LocationForm
                    //         nextStep={this.nextStep}
                    //         handleChange={this.handleChange}
                    //         values={values}
                    //     />
                    // </React.Fragment>
                )
            case 3:
                return(
                    <React.Fragment >
                        <CustomAppBar pageTitle="Event Recap"/>
                        <EventRecap values={values}/>
                    </React.Fragment>
                )
            default :
                return <h1>Error</h1>
        }
    }
}

export default EventCreationTunnel
