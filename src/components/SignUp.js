import '../css/signUp.css';
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class SignUp extends Component {
    state = {
        familyName : '',
        name : '',
        email : '',
        passwordSignUp : '',
        confirmPassword : ''
    }

    //Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    //Sign Up
    signUpButtonHandler = () => {
        var infos = JSON.stringify(this.state);
        console.log(infos);
    }

    render() {
        const { familyName, name, email, passwordSignUp, confirmPassword } = this.state;
        const values = { familyName, name, email, passwordSignUp, confirmPassword };


        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div className="signUpFields">
                        <TextField
                            hintText="Enter your Family Name"
                            floatingLabelText="Family Name"
                            onChange={this.handleChange('familyName')}
                            defaultValue={values.familyName}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Name"
                            floatingLabelText="Name"
                            onChange={this.handleChange('name')}
                            defaultValue={values.name}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Email Address"
                            floatingLabelText="Mail"
                            onChange={this.handleChange('email')}
                            defaultValue={values.email}
                            type="email"
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={this.handleChange('passwordSignUp')}
                            defaultValue={values.passwordSignUn}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Confirm your Password"
                            floatingLabelText="Password"
                            onChange={this.handleChange('confirmPassword')}
                            defaultValue={values.confirmPassword}
                        />
                        <br/>
                        <RaisedButton
                            className="signUpButton"
                            label="Sign Up"
                            primary={true}
                            onClick={this.signUpButtonHandler}
                            fullWidth={true}
                        />
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default SignUp
