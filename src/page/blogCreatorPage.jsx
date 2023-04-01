import React from 'react'
import '../css/blogCreatorPage.css'
import { message } from 'antd';
import { Form } from 'react-router-dom';
import { useState } from 'react';
export const BlogCreatorPage = () => {

    const [content, setContent] = useState(null);
    const [title, setTitle] = useState(null);
    const [inputDisabled, setInputDisabled] = useState(false);
    const [textDisabled, setTextDisabled] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi.open({
          type: 'success',
          content: 'This is a success message',
        });
      };

    const error = () => {
        messageApi.open({
            type: 'error',
            content: 'This is an error message',
        });
    };
    const warning = () => {
        messageApi.open({
            type: 'warning',
            content: 'This is a warning message',
        });
    };


    const onHandleSubmit = (e)=>{
        e.preventDefault();
        console.log({title:title, content:content})
        setInputDisabled(true);
        setTextDisabled(true);
        success();
        setInputDisabled(false);
        setTextDisabled(false);
        
    }
  return (
    <div>
        <Form onSubmit={e=>onHandleSubmit(e)}>
            <div className='title-box'>
                <span>Title</span>
                <input placeholder='Input title of your blog' required={true} onChange={(e)=>{setTitle(e.target.value)}} disabled={inputDisabled}/>
            </div>
            <div className='content-box'>
                <span>Content</span>
                <textarea placeholder='Write your content here' required={true} onChange={(e)=>{setContent(e.target.value)}} disabled={textDisabled}/>
            </div>
            {contextHolder}
            <div className='btn-group'>
                <button type='submit'>Create now</button>
                <button type='button' style={{backgroundColor:'green'}}>Save as draft</button>
            </div>
        </Form>
    </div>
  )
}
