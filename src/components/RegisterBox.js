import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';

const styles = {
    registerBox: {
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
    registerFields: {
        display: 'flex',
        flexDirection: 'column',
    },
    registerButton: {
        margin: 'auto'
    }
}


class RegisterBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            redirect: false
        };
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    submitRegister(e) {
        const { email, password, first_name, last_name } = this.state;
        if (email === '' || password === '' || first_name === '' || last_name === '') {
            alert("Please fille all the fields");
        }
        else {
            var self = this;
            var pw = this.state.password;
            Axios.post('/users', {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                password: this.state.password
            })
                .then((response) => {
                    (Axios.post('/sessions', {
                        email: response.data.email,
                        password: pw
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
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                    );
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/homepage' />
        }
        return (
            <div className='registerBox-container' style={styles.registerBox}>

                <div className='box' style={styles.registerFields}>
                    <TextField id='firstname-input'
                        className='register-input'
                        label='First Name'
                        required
                        onChange={this.handleChange('first_name')}
                    />

                    <TextField id='lastname-input'
                        className='register-input'
                        label='Last Name'
                        required
                        onChange={this.handleChange('last_name')}
                    />

                    <TextField id='email-input'
                        className='register-input'
                        label='Email'
                        onChange={this.handleChange('email')}
                        type='email'
                        required
                    />

                    <TextField id='password-input'
                        className='register-input'
                        hintText='Enter your Password'
                        floatingLabelText='Password'
                        label='Password'
                        type='password'
                        required
                        onChange={this.handleChange('password')}

                    />
                    <Button style={styles.registerButton} className='registerButton'
                        label='Sign In'
                        onClick={this.submitRegister.bind(this)}
                    >
                        Register
                        </Button>

                </div>

            </div>
        );
    }
}

export default RegisterBox;