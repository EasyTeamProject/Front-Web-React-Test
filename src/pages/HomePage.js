import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';

class HomePage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Drawer
                className='drawer'
                variant='permanent'
                anchor='left'
            >
                <div className = 'toolbar'>
                    
                </div>
            </Drawer>
        );
    }
}

export default HomePage;