import React, { useState } from 'react'
import _ from 'lodash'

const ChatEnterRoom = ({setUser}) => {

    const [userName, setUserName] = useState()
    
    const handleUser = () =>{
        if(!userName)return ;
        localStorage.setItem('user', userName)
        setUser(userName)
        localStorage.setItem('avatar',`https://picsum.photos/id/${_.random(1,1000)}/200/300`)
    } 

  return (
    <div className="flex flex-col justify-center items-center p-5 m-5 ">
      <div className="rounded shadow w-md bg-white">
        <div className="flex flex-col justify-center items-center p-7">
          
          <h2 className="font-semibold text-2xl">Python Community Chat</h2>
        </div>
        <div className="flex flex-row justify-center items-center p-5">
          <input
            onClick={(e) => setUserName(e.target.value)}
            className="border p-2 rounded m-2"
            type="text"
            placeholder="Enter Your NickName"
          />
          <button onClick={handleUser}
          className="bg-orange-500 p-3 rounded text-white cursor-pointer">
            Enter Chat Room
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatEnterRoom