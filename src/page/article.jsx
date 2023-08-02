import React, { useState } from 'react'
import { Rate } from 'antd';
import { useParams } from 'react-router-dom';
import MyTag from '../component/tag/tag';
import { article } from '../data/data';
import { Select } from 'antd';
import '../css/article.css'
import {FONT_LIST} from "../config/fontConfig";


export const Article = () => {

    let { blogId } = useParams();
    console.log(blogId)
    const current_article = article()[blogId-1];
    const [fontStyle, setFontStyle] = useState("'Shantell Sans', cursive");
    const handleChange = (value) => {
      setFontStyle(value)
    };
  return (
    <div>
        <div id='article-title-tags'>
          <div>
            <MyTag title={current_article.title} tags={current_article.tags}/>
          </div>
          <div>
            <Select defaultValue="'Shantell Sans', cursive"
                    style={{width: 120,}}
                    onChange={handleChange}
                    options={FONT_LIST}
            />
          </div>
        </div>
        <div style={{fontFamily: fontStyle}}>{current_article.content}</div>
        <div style={{
          fontSize:'12px',
          fontWeight:'bold',
          borderRadius:'5px',
          marginTop: '20px',
          padding:'2px'}}>
            <span>How do you like this blog?&nbsp;</span>
            <Rate allowHalf defaultValue={2.5} />
        </div>
    </div>
  )
}
