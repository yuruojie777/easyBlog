import React from 'react'
import { Rate } from 'antd';
import { useLoaderData } from 'react-router-dom';
import MyTag from '../component/tag';
import { article } from '../data';

export function loader({params}) {
    return article()[params.blogId-1]
}
export const Article = () => {
    const article_list = useLoaderData();
  return (
    <div >
        <MyTag title={article_list.title} tags={article_list.tags}/>
        <div>{article_list.content}</div>
        <div style={{
          fontSize:'12px', 
          fontWeight:'bold', 
          borderRadius:'5px', 
          marginTop: '20px',
          // border:'1px solid black', 
          padding:'2px'}}>How do you like this blog?<Rate allowHalf defaultValue={2.5} /></div>
    </div>
  )
}
