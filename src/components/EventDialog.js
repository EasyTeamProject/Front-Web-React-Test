import React, { Component } from 'react';
import { Dialog, AppBar, Toolbar, IconButton, Typography, Divider, List, ListItem, ListItemText, Button } from "@material-ui/core";
import { CloseIcon } from '@material-ui/icons/Close';

const styles = {
    appBar: {
        position: 'relative',
    },
    title: {
        flex: 1,
    },
}

export class EventDialog extends Component {
    render() {
        const { handleClose, open, transition } = this.props;
        return (
            <div>
                
            </div>
        )
    }
}

export default EventDialog
