import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const styles = {
    searchDiv:{
        margin: 25
    }
}

export class CustomAppBar extends Component {

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

    render() {
        return (
            <div>
                <AppBar position="static" color="default" >
                    <Toolbar>
                        <Typography variant="h6" color="inherit" >
                            {this.props.pageTitle}
                        </Typography>
                        {/* {this.searchBarDisplay()} */}
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default CustomAppBar
