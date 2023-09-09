import React, {useEffect, useRef, useState} from 'react';
import MDEditor from '@uiw/react-md-editor';
import {Button, Input, message, Rate} from 'antd';
import {useOutletContext, useParams} from 'react-router-dom';
import MyTag from '../component/tag/tag';
import { article } from '../data/data';
import { Select } from 'antd';
import '../css/article.css'
import {FONT_LIST} from "../config/fontConfig";
import {get, post, put} from "../service/ApiService";
import {LoadingOutlined} from "@ant-design/icons";
import { getCodeString } from 'rehype-rewrite';
import katex from 'katex';
import 'katex/dist/katex.css';

export const Article = () => {
    const [loading, setLoading] = useState(false);
    const [postId, setPostId] = useState(null);
    const [authorId, setAuthorId] = useState(null);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const {blogId} = useParams()
    useEffect( () => {
        async function fetchData()  {
            setLoading(true);
            get(`/endpoint/ezblog/post?postId=${blogId}`).then(
                (res) => {
                    console.log(res.data);
                    setPostId(res.data.id);
                    setAuthorId(res.data.authorId);
                    setContent(res.data.content);
                    setTitle(res.data.title);
                }
            ).catch(() => {
                console.log("failed to load posts");
            }).finally(() => {
                setLoading(false);
            })
        }
        fetchData();
    },[blogId]);
    const handleOnSave = () => {
        const data = {
            id: postId,
            authorId: authorId,
            title: title,
            content: content
        }
        console.log(data);
        put(`/endpoint/ezblog/post`, data).then(() => {
            message.success("Success");
            window.location.assign("/blog");
        }).catch((e) => {
            console.error(e);
            message.error("Error");
        })
    }
  return (
    <div className="article-container">
        {loading?
            (<div style={{display: "flex", justifyContent: 'center', alignItems: 'center', minHeight: '300px'}}>
                <LoadingOutlined
                style={{
                    fontSize: 24,
                }}
                spin
            /></div>):
            (
            <div>
                <div style={{display: "flex", flexDirection: "row", gap: "10px", marginBottom: "10px"}}>
                    <Input placeholder="Input title" maxLength={100} showCount={true} size="large" value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                    <Button type="primary" size="large" onClick={handleOnSave}>Save</Button>
                </div>
                <MDEditor
                    value={content}
                    onChange={setContent}
                    height="90vh"
                    // previewOptions={{
                    //     components: {
                    //         code: ({ inline, children = [], className, ...props }) => {
                    //             const txt = children[0] || '';
                    //             if (inline) {
                    //                 if (typeof txt === 'string' && /^\$\$(.*)\$\$/.test(txt)) {
                    //                     const html = katex.renderToString(txt.replace(/^\$\$(.*)\$\$/, '$1'), {
                    //                         throwOnError: false,
                    //                     });
                    //                     return <code dangerouslySetInnerHTML={{ __html: html }} />;
                    //                 }
                    //                 return <code>{txt}</code>;
                    //             }
                    //             const code = props.node && props.node.children ? getCodeString(props.node.children) : txt;
                    //             if (
                    //                 typeof code === 'string' &&
                    //                 typeof className === 'string' &&
                    //                 /^language-katex/.test(className.toLocaleLowerCase())
                    //             ) {
                    //                 const html = katex.renderToString(code, {
                    //                     throwOnError: false,
                    //                 });
                    //                 return <code style={{ fontSize: '100%' }} dangerouslySetInnerHTML={{ __html: html }} />;
                    //             }
                    //             return <code className={String(className)}>{txt}</code>;
                    //         },
                    //     },
                    // }}
                />
            </div>)}
    </div>
  )
}
