import React, {useEffect, useState} from 'react'
import { NavLink, Outlet } from 'react-router-dom'
// import '../css/blog.css'
import {Card, Empty, FloatButton, Badge, Tag} from 'antd';
import { Space, Typography } from 'antd';
import { Pagination } from 'antd';
import {article} from '../data/data';
import axios from "axios";
import {get} from "../service/ApiService";
import Meta from "antd/es/card/Meta";
import {LoadingOutlined} from "@ant-design/icons";
import Title from "antd/es/skeleton/Title";
export const Blog = () => {
    const { Text, Link } = Typography;
    const style = {
        textAlign: 'left',
        height: 'auto',
        borderRadius: '10px',
        padding: '20px',
        fontSize: '1em'
      };
    const [post, setPost] = useState([]);
    const [top, setTop] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const [total, setTotal] = useState(10);
    useEffect(() => {
        setLoading(true);
        get(`/endpoint/ezblog/post/search?page=${page}&size=${size}`).then(
            (res) => {
                setPost(res.data.content);
                setTotal(res.data.totalElements);
            }
        ).catch(() => {
            console.log("failed to load posts");
        }).finally(() => {
            setLoading(false);
        })
    },[page])
    useEffect(() => {
        get(`/endpoint/ezblog/post/top`).then(
            (res) => {
                setTop(res.data);
            }
        ).catch(() => {
            console.log("failed to load posts");
        })
    },[])
    // window.location.assign("/blog/11")
  return (
    <div className='blog-container'>
        <div className='blog-box' style={{minHeight: '80vh'}}>
            <div className='comment-box'>
                {
                    post.length === 0?
                        (<div style={{minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                {loading?(<LoadingOutlined
                                    style={{
                                        fontSize: 24,
                                    }}
                                    spin
                                />):(<Empty description="No blogs yet"/>)}
                        </div>):
                        (
                            <div>
                                {top!==null?
                                    (<Badge.Ribbon text="Top" color="red">
                                        <Card
                                            style={{
                                                marginTop: 16,
                                                textAlign: 'left'
                                            }}
                                            // type="inner"
                                            title={
                                                <span>
                                            {top.title}
                                                    <Tag color="magenta" style={{float: "right"}}>java</Tag>
                                        </span>
                                            }
                                            hoverable={true}
                                            onClick={() => window.location.assign('/article/' + top.id)}
                                        >
                                            {'By '}
                                            <Link italic>{top.authorFirstname + ' ' +
                                                top.authorLastname}</Link>
                                            {' at '}
                                            <Text italic>
                                                {new Date(top.updateTime).toLocaleTimeString() + ' ' + new Date(top.updateTime).toLocaleDateString()}
                                            </Text>
                                        </Card>
                                    </Badge.Ribbon>):
                                    ('')}
                                {post.map((item, index) => {
                        return (
                            <li key={index} style={{listStyle: "none"}}>
                                <Card
                                    style={{
                                        marginTop: 16,
                                        textAlign: 'left'
                                    }}
                                    // type="inner"
                                    title={
                                        <span>
                                            {item.title}
                                            <Tag color="magenta" style={{float: "right"}}>java</Tag>
                                        </span>
                                    }
                                    hoverable={true}
                                    onClick={() => window.location.assign('/article/' + item.id)}
                                >
                                    {'By '}
                                    <Link href="/profile" italic>{item.authorFirstname + ' ' +
                                        item.authorLastname}</Link>
                                    {' at '}
                                    <Text italic>
                                        {new Date(item.updateTime).toLocaleTimeString() + ' ' + new Date(item.updateTime).toLocaleDateString()}
                                    </Text>
                                </Card>
                            </li>
                        )
                    })}
                                <Pagination total={total}
                                            current={page + 1}
                                            pageSize={size}
                                            style={{margin: '10px 0 10px 0'}}
                                            onChange={(page, pageSize) => {setPage(page - 1)}}/>
                            </div>
                        )
                }
            </div>
        </div>
    </div> 
    )
}
