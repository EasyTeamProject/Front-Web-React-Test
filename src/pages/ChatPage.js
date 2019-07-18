import React, { Component } from 'react';
import firebase from 'firebase';
import { TextField, List, ListItem, ListItemText } from "@material-ui/core";


class ChatPage extends Component {
  constructor(props) {
    super(props)
    this.state = { text: "", messages: [] }
  }
  componentDidMount() {
    this.getMessages()
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
    var messagesDB = firebase
      .database()
      .ref("chat/")
      .limitToLast(500)
    messagesDB.on("value", snapshot => {
      let newMessages = []
      snapshot.forEach(child => {
        var message = child.val()
        if(message.event_id === "1")
          newMessages.push({ id: child.key, text: message.messageText, userName: message.messageUser })
      })
      this.setState({ messages: newMessages })
      this.bottomSpan.scrollIntoView({ behavior: "smooth" })
    })
  }

  renderMessages = () => {
    return this.state.messages.map(message => (
      <ListItem>
        <ListItemText
          style={{ wordBreak: "break-word" }}
          primary={message.userName + ' : ' + message.text}
        />
      </ListItem>
    ))
  }

  render() {
    return (
      <div className="App">
        <List>{this.renderMessages()}</List>
        <TextField
          autoFocus={true}
          multiline={true}
          rowsMax={3}
          placeholder="Type something.."
          onChange={event => this.setState({ text: event.target.value })}
          value={this.state.text}
          onKeyPress={this.onSubmit}
          style={{ width: "98vw", overflow: "hidden" }}
        />
        <span ref={el => (this.bottomSpan = el)} />
      </div>
    )
  }
}

export default ChatPage
