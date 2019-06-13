import '../css/login.css';
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Redirect} from 'react-router-dom';

export class Login extends Component {
    state = {
        usernameSignIn : '',
        passwordSignIn : '',
        redirect: false
    }

    

    //Sign In
    signInButtonHandler = () => {
        var infos = JSON.stringify(this.state);
        console.log(infos);
        this.setState({redirect: true})
    }

    //Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        // const { state } = this.state;
        const { usernameSignIn, passwordSignIn } = this.state;
        const values = { usernameSignIn, passwordSignIn };

        if(this.state.redirect){
            return <Redirect to="/sign-up"/>;
        }

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div className="loginFields">
                        <TextField
                            hintText="Enter your User Name"
                            floatingLabelText="Username"
                            onChange={this.handleChange('usernameSignIn')}
                            defaultValue={values.usernameSignIn}
                        />
                        <br/>
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={this.handleChange('passwordSignIn')}
                            defaultValue={values.passwordSignIn}
                        />
                        <br/>
                        
                        <RaisedButton
                            className="loginButton"
                            label="Sign In"
                            primary={true}
                            onClick={this.signInButtonHandler}
                        />
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default Login
