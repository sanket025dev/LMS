import React, { useEffect, useState } from 'react'
import ChatEnterRoom from './ChatEnterRoom'
import ChatList from './ChatList'
import SendTextarea from './SendTextarea'
import socketIOClient from 'socket.io-client'


const CommunityChat = () => {

  const [user, setUser]= useState(localStorage.getItem('user'))
  const socketio = socketIOClient('http://localhost:3005')
  const [chats, setChats] = useState([])

  useEffect(()=>{
    socketio.on('chat',(chat)=>{
      setChats(chats)
    })
  })

  const sendToSocket = (chat) =>{
    socketio.emit('chat',chat)
  }

  const addMessage = (chat) => {
    const newChat = {
      ...chat,
      user: localStorage.getItem("user"),
      avatar: localStorage.getItem("avatar"),
    };

    setChats([...chats, newChat])
    sendToSocket([...chats, newChat])
  }

  const Logout = ()=>{
        localStorage.removeItem('user')
        localStorage.removeItem('avatar')
        setUser('')
    }
  


  return (
    <>
      {user ? (
        <div>
          <div className="flex flex-row gap-5 items-center justify-between p-5 m-5 bg-orange-200 rounded shadow">
            <h3>Username : {user}</h3>
            <p className="flex items-center">
              <span className="pr-3">

              </span>{" "}
              Python Community Chat
            </p>
            <button className="cursor-pointer" onClick={Logout}>
              Logout
            </button>
          </div>
          <ChatList chats={chats} />
          <SendTextarea addMessage={addMessage} />
        </div>
      ) : (
        <ChatEnterRoom setUser={setUser} />
      )}
    </>
  );
}

export default CommunityChat