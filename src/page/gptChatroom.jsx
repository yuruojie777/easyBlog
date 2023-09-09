import React, {useEffect, useRef, useState} from "react";
import {post} from "../service/ApiService";
import {Avatar, Button, Input} from "antd";
import {SendOutlined} from "@ant-design/icons";
import '../css/gptChatroom.css';
export const GptChatroom = () => {
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
    const onSend = () => {
        if(loading) return;
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
            setText("");

            post(`/endpoint/ezblog/chat/gpt`, chatRef.current).then(
                (res) => {
                    const response = {
                        "sub": "receiver",
                        "name": "Alice",
                        "role": "assistant",
                        "content": res.data,
                        "timestamp": new Date().getTime()
                    }
                    setChatContent((prevState) => [...prevState, response]);
                    chatRef.current = [...chatRef.current, response];
                    setLoading(false);
                }
            )
        }
    }

    return (
        <div className="chatroom-container">
            <div className="chat-room-box" ref={chatBoxRef}>
                {
                    chatContent.map(
                        (chat, index) => {
                            if(chat.sub === "sender") {
                                return (
                                    <li key={index} style={{textAlign: "right"}}>
                                        <div className="chat-block chat-block-right">
                                            <span className="chat-content-box chat-right">{chat.content}</span>
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
                                        <div className="chat-block chat-block-left">
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
                                            <span className="chat-content-box chat-left">{chat.content}</span>
                                        </div>
                                    </li>
                                )
                            }
                        }
                    )
                }
            </div>
            <div className="chat-input-box">
                <Input onPressEnter={onSend} ref={inputRef} value={text} onChange={e => setText(e.target.value)}/>
                <Button type="primary"
                        loading={loading}
                        onClick={() => onSend()}><SendOutlined /></Button>
            </div>
        </div>
    )
}