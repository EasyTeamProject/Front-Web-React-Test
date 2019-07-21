import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
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
    loginFields: {
        display: 'flex',
        flexDirection: 'column',
    },
    loginButton: {
        margin: 'auto'
    }
}


class LoginBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: false
        };
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    submitLogin(e) {
        const { email, password } = this.state;
        if (email === '' || password === '') {
            alert('Please login');
        }
        else {
            var self = this;
            Axios.post('/sessions', {
                email: this.state.username,
                password: this.state.password
            })
                .then(function (response) {
                    localStorage.setItem('token', response.data.success);
                    localStorage.setItem('user_id', response.data.user.id);
                    localStorage.setItem('name', response.data.user.name);
                    localStorage.setItem('email', response.data.user.email);
                    localStorage.setItem('created', response.data.user.created_at);
                    if (typeof response.data.error === 'undefined') {
                        self.setState({
                            redirect: true
                        })
                    }
                    else{
                        alert("Wrong email or password");
                    }
                })
                .catch(function (error) {
                    self.setState({
                        redirect: false
                    })
                    console.log(error);
                    
                });
        }

    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/homepage' />
        }
        return (
            <div className='loginBox-container' style={styles.loginBox}>
                <div className='box' style={styles.loginFields}>
                    <TextField id='username-input'
                        className='login-input'
                        label='Email'
                        required
                        onChange={this.handleChange('username')}
                    />

                    <TextField id='password-input'
                        type='password'
                        className='login-input'
                        hintText='Enter your Password'
                        floatingLabelText='Password'
                        label='Password'
                        InputProps={styles.loginFields.input}
                        required
                        onChange={this.handleChange('password')}

                    />
                    <Button style={styles.loginButton} className='loginButton'

                        label='Sign In'
                        onClick={this.submitLogin.bind(this)}
                    >
                        Login
                    </Button>
                </div>

            </div>
        );
    }
}

export default LoginBox;