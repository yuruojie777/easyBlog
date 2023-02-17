import React, { useState } from 'react'
import { Rate } from 'antd';
import { useLoaderData } from 'react-router-dom';
import MyTag from '../component/tag';
import { article } from '../data';
import { Select, Space } from 'antd';
import './article.css'
export function loader({params}) {
    return article()[params.blogId-1]
}
export const Article = () => {
    const article_list = useLoaderData();
    const [fontStyle, setFontStyle] = useState("'Shantell Sans', cursive");
    const handleChange = (value) => {
      setFontStyle(value)
    };
  return (
    <div>
        <div id='article-title-tags'>
          <div>
            <MyTag title={article_list.title} tags={article_list.tags}/>
          </div>
          <div>
          <Select
          defaultValue="'Shantell Sans', cursive"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: "'Babylonica', cursive",
              label: "Babylonica",
            },
            {
              value: "'Oswald', sans-serif",
              label: "Oswald",
            },
            {
              value: "'Julee', cursive",
              label: "Julee",
            },
            {
              value: "'Shantell Sans', cursive",
              label: "Shantell Sans"
            }
          ]}
    />
          </div>  
    
        </div>
        
        <div style={{fontFamily: fontStyle}}>{article_list.content}</div>
        <div style={{
          fontSize:'12px', 
          fontWeight:'bold', 
          borderRadius:'5px', 
          marginTop: '20px',
          padding:'2px'}}>How do you like this blog?<Rate allowHalf defaultValue={2.5} /></div>
    </div>
  )
}
