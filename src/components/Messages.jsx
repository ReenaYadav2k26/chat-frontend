import React, { useRef, useEffect } from 'react';
import Message from './Message';
import useGetOtherUsers from '../hooks/useGetOtherUsers';
import useGetMessages from '../hooks/useGetMessages';
import { useSelector } from "react-redux";
import useGetRealTimeMessage from '../hooks/useGetRealTimeMessage';


const Messages = () =>{
     useGetMessages();
     useGetRealTimeMessage();
     const { messages } = useSelector(store => store.message);
    
    const endRef = useRef(null);

    useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

     return (
         <div className="flex-1 overflow-y-auto px-4 scrollbar-thin" style={{ maxHeight: 'calc(100vh - 250px)' }}>
             {
               messages && messages?.map((message) => {
                    return (
                        <Message key={message._id} message={message} />
                    )
                })
            }
            <div ref={endRef} />
        </div>
    )
}
export default Messages