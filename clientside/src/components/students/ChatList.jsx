import React from 'react'

const ChatList = ({chats}) => {

    const user = localStorage.getItem('user')
    
    function SenderChat ({avatar, username, message}) {
        return(
        <div className='flex flex-row justify-end m-5'>
        <img
          className='w-9 h-9 rounded-full'
          src={avatar}
          alt=""
        />
        <p className='flex flex-col mt-3 ml-3 bg-white p-2 rounded shadow'>
            <strong>{username}</strong>
            <p>{message}</p>
            </p>
      </div>
        )
    }

    function ReceiverChat ({avatar, username, message}) {
        return(
        <div className='flex flex-row justify-start m-5'>
        <img
          className='w-9 h-9 rounded-full'
          src={avatar}
          alt=""
        />
        <p className='flex flex-col mt-3 ml-3 bg-white p-2 rounded shadow'>
          <strong>{username}</strong>
          <p>{message}</p>
        </p>
      </div>
        )
    }

  return (
    <div className='overflow-y-scroll h-80'>
        {chats.map((chat, index) => {
            if(chat.user === user){
                return <SenderChat
                key={index}
                message = {chat.message}
                username = {chat.user}
                avatar = {chat.avatar}
                />
            }else {
            return <ReceiverChat
                key={index}
                message = {chat.message}
                username = {chat.user}
                avatar = {chat.avatar}
                />
            }
        })}
      
    </div>
  );
}

export default ChatList