import React, { useEffect, useState } from 'react';
import './messages.css';
import axios from "axios";


function Messages({target_id,socket}) {
  const [messages, setMessages] = useState({});

  function Message_user(params) {
    const message = params.message
    const message_User = message.user_id;
    const user_id = getCookie("userId")
    // console.log(user_id);
    // console.log(message_User);
  
    if (user_id === message_User.toString()) {
      return (<div
              key={message.id}
              className="message-container user_msg"
              title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
            >
              {/* <span className="name_right">{message.firstname}:<br/></span> */}
              <span className="message">{message.message_value}</span>
              <p> 
                <span className="time-right">{new Date(message.message_time).toLocaleTimeString()}</span>
              </p>
            </div>);
    }else{
      return (<div
              key={message.id}
              className="message-container target_msg"
              title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}
            >
              {/* <span className="name_left">{message.firstname}:<br/></span> */}
              <span className="message">{message.message_value}</span>
              <p> 
                <span className="time-right">{new Date(message.message_time).toLocaleTimeString()}</span>
              </p>
            </div>);
    }
    
    return <p>Here, You can write user template. You are a User.</p>;
  }
  

  useEffect(() => {
    var requestOptions = {  
          method: 'GET',
          headers: { 'Content-Type': 'application/json', "authorization": getCookie("token"), "user_id":getCookie("userId"), "target_id":target_id  },
      };
      
      
    axios.get('http://localhost:3001/api/chat',requestOptions).then(async res => {
        var data = await res.data;
        setMessages(data);
        // console.log(data);
    })

    const messageListener = (message) => {
        setMessages((prevMessages) => {
            const newMessages = {...prevMessages};
            if((message.user_id === getCookie("userId") && message.target_id === target_id) || ((message.user_id) === target_id.toString() &&  (message.target_id).toString() === getCookie("userId"))){
                // console.log("test")
                newMessages[message.id] = message;
            }
            return newMessages;
        });
    };
  
    
  
    socket.on('message', messageListener);
    var user_id = getCookie("userId");
    var token = getCookie("token");
    var Users = {user_id : user_id, target_id : target_id, token : token}
    // console.log(Users)
    socket.emit('getMessages', Users);

    return () => {
      socket.off('message', messageListener);
    };
  }, [target_id,socket]);

  return (
    <div className="message-list">
        
      {[...Object.values(messages)]
        .sort((a, b) => a.time - b.time)
        .map((message) => (
          <div>
            <Message_user message={message} />
          </div>
        ))
      }
    </div>
  );
}


function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


export default Messages;