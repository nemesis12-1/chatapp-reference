import React, { useEffect } from 'react';
import axios from 'axios';

const ChatPage = () => {
    const [chats, setChat] = React.useState([]);

    const fetchChat = async () => {
        const { data } = await axios.get('http://localhost:3000/test')
        console.log(data)
    }

    useEffect(() => {
        fetchChat();
    }, [])

    return (
        <>
            <div>
                
            </div>
        </>
    )
}

export default ChatPage