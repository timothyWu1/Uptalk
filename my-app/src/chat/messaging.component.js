import React, { useEffect, useState } from "react";
import axios from "axios";
import Messages from './messages.component';
import MessageInput from './messageInput.component';
import io from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:3001";




 
export default function Message({target_id}) {
    const [socket, setSocket] = useState(null);
    

  useEffect(() => {
    window.scrollTo({top:document.body.scrollHeight, behavior: 'instant',});
    // var user_id = getCookie("userId");
    // var token = getCookie("token");
    // var target_id = target_id
    // const newSocket = io(ENDPOINT, user_id, token, target_id);
    const newSocket = io(ENDPOINT);
    setSocket(newSocket);
    return () => newSocket.close(); 
  }, [setSocket]);



  return (
    <div className="App">
      { socket ? (
        <div className="chat-container">
          <Messages target_id={target_id} socket={socket} />
          <MessageInput target_id={target_id}  socket={socket} />
        </div>
      ) : (
        <div>Not Connected</div>
      )}
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
