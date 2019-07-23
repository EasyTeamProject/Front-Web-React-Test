import firebase from 'firebase';
import React, { Component } from 'react'

export class Notification extends Component {
    constructor(props){
        super(props);
        this.state = {
            notifs: []
        }

        this.sendNotifToDB = this.sendNotifToDB.bind(this);
    }

    componentDidMount(){
        this.getNotifs();
    }

    submitNotif(){
        this.sendNotifToDB();
    }

    getNotifs = () => {
        var notifsDB = firebase
          .database()
          .ref("notification/")
          .limitToLast(500);
        notifsDB.on("value", snapshot => {
          let newNotifs = []
          snapshot.forEach(child => {
            var notif = child.val()
            if (notif.event_name === this.props.eventName && notif.user_email === this.props.userEmail)
              newNotifs.push({ event_name: notif.event_name, user_email: notif.user_email})
          })
          this.setState({ notifs: newNotifs })
        });
    }

    getNewNotifs = () =>{
        var notifsDB = firebase
            .database()
            .ref("notification/")
            .limitToLast(500);
        notifsDB.on("value", snapshot => {
            let newNotifs = []
            snapshot.forEach(child => {
                var notif = child.val()
                if (notif.event_name === this.props.eventName && notif.user_email === this.props.userEmail){
                    newNotifs.push({ event_name: notif.event_name, user_email: notif.user_email});
                }
            })
            if(newNotifs !== this.state.notifs){
                this.setState({ notifs: newNotifs });
                this.renderNotif(newNotifs.pop());
            }
        });
    }

    renderNotif(notif){
        alert("You've been added to the event : " + notif.event_name + " by " + notif.user_email + ".");
    }


    sendNotifToDB = () => {
        firebase
          .database()
          .ref("notification/")
          .push({
            event_name: this.props.eventName,
            user_email: this.props.userEmail
          })
      }

    render() {
        if(this.props.sendNotif){
            return (
                <div>
                    {this.submitNotif()}
                </div>
            )
        }
        else{
            return(
                <div>

                </div>
            )
        }
    }
}

export default Notification
