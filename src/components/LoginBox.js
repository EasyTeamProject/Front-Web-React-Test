import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const styles = {
    loginBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        padding: '15px',
        flexDirection: 'column',
        borderRadius: '3px',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    loginFields:{
        display: 'flex',
        flexDirection: 'column',
    },
    loginButton:{
        margin: 'auto'
    }
}


class LoginBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    submitLogin(e){

        Axios.post('/sessions', {
            email: this.state.username,
            password: this.state.password
        })
        .then(function(response){
            localStorage.setItem('token', response.data.success);
        })
        .catch(function(error){
            console.log(error);
        });
    }

    render(){
        return(
            <div className='loginBox-container' style={styles.loginBox}>
                <div className='box' style={styles.loginFields}>
                    <TextField id='username-input'
                        className='login-input'
                        label='Username'
                        required
                        onChange={this.handleChange('username')}
                    />

                    <TextField id='password-input'
                        type='password'
                        className='login-input'
                        hintText='Enter your Password'
                        floatingLabelText='Password'
                        label='Password'
                        InputProps= {styles.loginFields.input}
                        required
                        onChange={this.handleChange('password')}

                    />
                    <Link style={styles.loginButton} to='/homepage'>
                        <Button className='loginButton'

                            label='Sign In'
                            onClick={this.submitLogin.bind(this)}
                        >
                            Login
                        </Button>
                    </Link>
                </div>

            </div>
        );
    }
}

export default LoginBox;