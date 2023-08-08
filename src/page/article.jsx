import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
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
    <div className="article-container">
        <MDEditor.Markdown source={"# " + current_article.title + "\n" + current_article.content} style={{ whiteSpace: 'pre-wrap' }} />
    </div>
  )
}
