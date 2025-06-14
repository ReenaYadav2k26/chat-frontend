import React, { useEffect, useRef } from 'react'
import {useSelector} from "react-redux";
import dayjs from 'dayjs';  // ✅ Add this import

const Message = ({message}) => {
    const scroll = useRef();
    const {authUser,selectedUser} = useSelector(store=>store.user);

    useEffect(()=>{
        scroll.current?.scrollIntoView({behavior:"smooth"});
    },[message]);
    


  const isSelf = message?.senderId === authUser?._id;
  const profilePhoto = isSelf ? authUser?.profilePhoto : selectedUser?.profilePhoto;

  // ✅ Format time (e.g., "08:15 PM")
  const formattedTime = new Date(message?.createdAt).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });




    return (
        <div ref={scroll} className={`chat ${message?.senderId === authUser?._id ? 'chat-end' : 'chat-start'}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={message?.senderId === authUser?._id ? authUser?.profilePhoto  : selectedUser?.profilePhoto } />
                </div>
            </div>
            <div className="chat-header">
                <time className="text-xs opacity-50 text-white">{formattedTime}</time>
            </div>
            <div className={`chat-bubble ${message?.senderId !== authUser?._id ? 'bg-gray-200 text-black' : ''} `}>{message?.message}</div>
        </div>
    )
}

export default Message