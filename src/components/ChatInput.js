import { Button } from '@mui/material';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import firebase from 'firebase/compat/app';

function ChatInput({ channelName, channelId, chatRef }) {
    const [input, setInput] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();

        if (!channelId) {
            return false
        }

        db.collection("rooms").doc(channelId).collection("messages").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Jasmine Chandwani',
            userImage: 'https://wallpaperaccess.com/full/84248.png'
        });

        chatRef.current.scrollIntoView({
            behavior: "smooth"
        })

        setInput("")
    };
    return (
        <ChatInputContainer>

            <form>
                <input className='chatInput__input'
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder={`Message #ROOM`} />
                <Button hidden type='submit' onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>

    )
}

export default ChatInput;

const ChatInputContainer = styled.div`
border-radius: 20px;

>form{
    position: relative;
    display: flex;
    justify-content: center;
}

.chatInput__input{
    position: fixed;
    padding: 20px;
    width: 60%;
    bottom: 30px;
    border: 1px solid gray;
    border-radius: 3px;
    outline: none;
}

> form > button{
    display: none !important;
}
`;
