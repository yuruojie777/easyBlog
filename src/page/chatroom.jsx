import React, {useEffect, useRef, useState} from "react";
import io from 'socket.io-client';
import {post} from "../service/ApiService";
import {Avatar, Button, Input} from "antd";
import {SendOutlined} from "@ant-design/icons";
import '../css/chatroom.css';
export const Chatroom = () => {
    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    })
    const [chatContent, setChatContent] = useState([]);
    const chatRef = useRef([]);
    const [text, setText] = useState("");
    const inputRef = useRef("");
    const chatBoxRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const socket = new WebSocket('ws://localhost/endpoint/app/message');
    // socket.addEventListener('open', (event) => {
    //     console.log('WebSocket Connection opened:', event);
    //     socket.send('Hello, WebSocket Server!');
    // });

// Listen for messages
    socket.addEventListener('message', (event) => {
        console.log('WebSocket Message received:', event.data);
    });

// Handle errors
//     socket.addEventListener('error', (event) => {
//         console.error('WebSocket Error:', event);
//     });

// Connection closed
//     socket.addEventListener('close', (event) => {
//         console.log('WebSocket Connection closed:', event);
//     });
    const onSend = () => {
        setLoading(true);
        if(text.length !== 0) {
            const newContent = {
                "sub": "sender",
                "name": "Bob",
                "role": "user",
                "content": inputRef.current.input.value,
                "timestamp": new Date().getTime()
            }

            setChatContent((prevState) => [...prevState, newContent]);
            chatRef.current = [...chatRef.current, newContent];
            console.log(chatRef.current);
            post(`endpoint/ezblog/chat/message`, inputRef.current.input.value).then(
                () => {
                   setLoading(false);
                }
            )
            // socket.send(inputRef.current.input.value);
            setText("");
            // post(`/endpoint/ezblog/chat/gpt`, chatRef.current).then(
            //     (res) => {
            //         const response = {
            //             "sub": "receiver",
            //             "name": "Alice",
            //             "role": "assistant",
            //             "content": res.data,
            //             "timestamp": new Date().getTime()
            //         }
            //         setChatContent((prevState) => [...prevState, response]);
            //         chatRef.current = [...chatRef.current, response];
            //         setLoading(false);
            //     }
            // )
        }
    }

    return (
        <div className="personal-chatroom-container">
            <div className="personal-chat-room-box" ref={chatBoxRef}>
                {
                    chatContent.map(
                        (chat, index) => {
                            if(chat.sub === "sender") {
                                return (
                                    <li key={index} style={{textAlign: "right"}}>
                                        <div className="personal-chat-block personal-chat-block-right">
                                            <span className="personal-chat-content-box personal-chat-right">{chat.content}</span>
                                            <Avatar
                                                shape="square"
                                                style={{
                                                    backgroundColor: "blue",
                                                    verticalAlign: 'middle',
                                                    cursor: 'pointer'
                                                }}
                                                size="large"
                                            >
                                                {chat.name}
                                            </Avatar>
                                        </div>
                                    </li>
                                )
                            } else {
                                return (
                                    <li key={index} style={{textAlign: "left"}}>
                                        <div className="personal-chat-block personal-chat-block-left">
                                            <Avatar
                                                shape="square"
                                                style={{
                                                    backgroundColor: "pink",
                                                    verticalAlign: 'middle',
                                                    cursor: 'pointer'
                                                }}
                                                size="large"
                                            >
                                                {chat.name}
                                            </Avatar>
                                            <span className="personal-chat-content-box personal-chat-left">{chat.content}</span>
                                        </div>
                                    </li>
                                )
                            }
                        }
                    )
                }
            </div>
            <div className="personal-chat-input-box">
                <Input onPressEnter={onSend} ref={inputRef} value={text} onChange={e => setText(e.target.value)}/>
                <Button type="primary"
                        loading={loading}
                        onClick={() => onSend()}><SendOutlined /></Button>
            </div>
        </div>
    )
}