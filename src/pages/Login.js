import React from 'react';
import LoginBox from '../components/LoginBox';
import RegisterBox from '../components/RegisterBox';
import { Button, ButtonGroup } from '@material-ui/core';


const styles = {
    rootContainer:{
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        margin: '0 auto',
        marginTop: '20vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '400px'
    },
    form:{
        margin: 'auto',
        padding: '15px',
        flexDirection: 'row',
        borderRadius: '3px',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    }
}


export class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false,
        }
    }

    showLoginBox(){
        this.setState({isLoginOpen: true, isRegisterOpen: false});
    }

    showRegisterBox(){
        this.setState({isLoginOpen: false, isRegisterOpen: true});
    }

    render() {

        return (
            <div className="root-container" style={styles.rootContainer}>
                
                <ButtonGroup className="box-controller" 
                    style={styles.form}>
                    <Button disabled={this.state.isLoginOpen} className={"controller " + (this.state.isLoginOpen ? "selected-controller" : "")}
                        onClick={this.showLoginBox.bind(this)}>
                        Login
                    </Button>
                    <Button disabled={this.state.isRegisterOpen} className={"controller " + (this.state.isRegisterOpen ? "selected-controller" : "")}
                        onClick={this.showRegisterBox.bind(this)}>
                        Register
                    </Button>
                </ButtonGroup>
                {this.state.isLoginOpen && <LoginBox/>}
                {this.state.isRegisterOpen && <RegisterBox/>}

                

                
            </div>
        )
    }
}

export default Login;
