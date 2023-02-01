import React from 'react'
import {Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import './blog.css'
import { FloatButton } from 'antd';
import { Col, Row } from 'antd';
import {article} from '../data';
export const Blog = () => {
    const style = {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'black',
        textAlign: 'left',
        height: '1500px',
        borderRadius: '10px',
        padding: '10px',
        fontSize: '1em'
      };
    const navigate = useNavigate();
    const createNewBlog = ()=>{
        navigate("/blog/new");
    }

    
  return (
    <div className='blog-container'>
        <FloatButton onClick={createNewBlog} />
        <div className='blog-box'>
            <div id='title-box'>
                <div style={style}>
                    <h3 style={{textAlign:'center'}}>Content</h3>
                    {article().length===0?<p>No content yet</p>:
                        <ul style={{padding:'0', textAlign:'center'}}>
                            {article().map((item)=>{return (
                                <li key={item.id}><NavLink to={`/blog/${item.id}`} style={{textDecoration:'none', color:'black', fontWeight:'bold'}}>{item.title}</NavLink></li>
                            )
                            })}
                        </ul>
                    }

                </div>
            </div>
            <div style={style} id='content-box'>
                <Outlet/>
            </div>
        </div>
    </div> 
    )
}
