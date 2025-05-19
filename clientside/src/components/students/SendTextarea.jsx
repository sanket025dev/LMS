import React, { useState } from 'react'

const SendTextarea = ({addMessage}) => {

    const [message, setMessage] = useState()
    const sendMessage = () =>{
        addMessage({message})
        setMessage("")
    }

  return (
    <>
    <div className='flex flex-row justify-center items-end h-26'>
        <textarea className=' bg-white border p-2 rounded' 
        name="message" id="" rows={3} cols={45} 
        placeholder='Type message'
        onChange={(e)=>setMessage(e.target.value)}></textarea>
        <button className='bg-orange-500 px-5 py-3 mx-2 rounded cursor-pointer'
        onClick={sendMessage}>Send</button>
    </div>
    </>
  )
}

export default SendTextarea 