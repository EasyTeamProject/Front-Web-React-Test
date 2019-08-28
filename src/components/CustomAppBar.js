import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
    searchDiv:{
        margin: 25
    }
}

export class CustomAppBar extends Component {
    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    searchBarDisplay(){
        if(this.props.step === 2){
            return(
                <div style={styles.searchDiv}>
                    <SearchIcon/>
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'Search' }}
                    />
                </div>
            )
        }
    }

    handleClick(){
        if(window.location == "http://localhost:3001/homepage")
            window.location.reload();
    }

    render() {
        return (
            <div>
                <AppBar position="static" color="default" >
                    <Toolbar>
                        <Typography variant="h6" color="inherit" >
                            {this.props.pageTitle}
                        </Typography>
                        <Link to='/homepage'>
                            <Button onClick={this.handleClick}>
                                Exit
                            </Button>
                        </Link>
                        {/* {this.searchBarDisplay()} */}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default CustomAppBar
