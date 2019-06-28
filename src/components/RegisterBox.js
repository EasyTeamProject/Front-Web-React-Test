import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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
    registerFields:{
        display: 'flex',
        flexDirection: 'column',
    },
    registerButton:{
        margin: 'auto'
    }
}


class RegisterBox extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    submitRegister(e){

    }

    render(){
        return(
            <div className='registerBox-container' style={styles.registerBox}>

                <div className='box' style={styles.registerFields}>
                    <TextField id='username-input'
                        className='register-input'
                        label='Username'
                    />

                    <TextField id='email-input'
                        className='register-input'
                        label='Email'
                    />

                    <TextField id='password-input'
                        className='register-input'
                        hintText='Enter your Password'
                        floatingLabelText='Password'
                        label='Password'
                        
                    />
                    <Link style={styles.registerButton} to="/homepage">
                        <Button className='registerButton' 
                            label='Sign In'
                            onClick={this.submitRegister.bind(this)}
                        >
                            Register
                        </Button>
                    </Link>
                </div>

            </div>
        );
    }
}

export default RegisterBox;