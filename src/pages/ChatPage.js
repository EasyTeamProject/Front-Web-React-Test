import React, { Component } from 'react';
import firebase from 'firebase';
import { Fab, TextField, List, ListItem, ListItemText } from "@material-ui/core";
import { AddIcon } from '@material-ui/icons/Add';
import AppDrawer from '../components/AppDrawer';

const styles = {
  chatWindow: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    margin: '0 auto',
    marginTop: '20vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    flexDirection: 'column',
    width: '400px',
    height: '600px',
  },
  messages: {
    overflow: 'auto',
  },
  chatInput: {
    width: '90%',
  },
  singleMessages: {
    // display: 'flex',
    width: "100%",
    flexDirection: 'column',
    justifyContent: 'left',
    // textAlign: 'left',
  }
}

class ChatPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
      messages: []
    }
  }
  componentDidMount() {
    this.getMessages();
  }

  onSubmit = event => {
    if (event.charCode === 13 && this.state.text.trim() !== "") {
      this.writeMessageToDB(this.state.text)
      this.setState({ text: "" })
    }
  }

  writeMessageToDB = message => {
    firebase
      .database()
      .ref("chat/")
      .push({
        event_id: '1',
        messageText: message,
        messageTime: new Date().getTime(),
        messageUser: 'Florian Richard'
      })
  }

  getMessages = () => {
    const { currentEventId } = this.props;
    console.log(currentEventId);
    var messagesDB = firebase
      .database()
      .ref("chat/")
      .limitToLast(500)
    messagesDB.on("value", snapshot => {
      let newMessages = []
      snapshot.forEach(child => {
        var message = child.val()
        if (message.event_id === '' + currentEventId)
          newMessages.push({ id: child.key, text: message.messageText, userName: message.messageUser })
      })
      this.setState({ messages: newMessages })
      this.bottomSpan.scrollIntoView({ behavior: "smooth" })
    })
  }

  renderMessages = () => {
    return this.state.messages.map(message => (
      <ListItem style={styles.singleMessages}>
        <ListItemText
          style={{ wordBreak: "break-word", width: '100%' }}
          secondary={message.userName}
        />
        <ListItemText
          style={{ width: '100%' }}
          primary={message.text}
        />
      </ListItem>
    ))
  }

  render() {
    return (
      <div>
        <AppDrawer />
        <div style={styles.chatWindow}>
          <Fab color="primary" aria-label="Add">
            <AddIcon />
          </Fab>
          <div style={styles.messages}>
            <List>{this.renderMessages()}</List>
            <span ref={el => (this.bottomSpan = el)} />
          </div>
          <TextField
            autoFocus={true}
            multiline={true}
            rowsMax={3}
            placeholder="Type something.."
            onChange={event => this.setState({ text: event.target.value })}
            value={this.state.text}
            onKeyPress={this.onSubmit}
            style={styles.chatInput}
          />
        </div>
      </div>

    )
  }
}

export default ChatPage
