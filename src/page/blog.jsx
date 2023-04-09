import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../css/blog.css'
import { FloatButton } from 'antd';
import { Pagination } from 'antd';
import {article} from '../data/data';
export const Blog = () => {
    const style = {
        textAlign: 'left',
        height: 'auto',
        borderRadius: '10px',
        padding: '20px',
        fontSize: '1em'
      };
  return (
    <div className='blog-container'>
        <FloatButton onClick={()=>window.location="/blog/new"} />
        <div className='blog-box'>
            <div id='title-box' style={style}>
                <h3 style={{textAlign:'center'}}>Content</h3>
                {article().length===0?<p>No content yet</p>:
                    <ul>
                        {article().map((item)=>{return (
                            <li key={item.id}><NavLink to={`/blog/${item.id}`}>{item.title}</NavLink></li>
                        )
                        })}
                    </ul>
                }
            </div>
            <div style={style} id='content-box'>
                <Outlet/>
            </div>
            <div className="pagination">
                <Pagination defaultCurrent={1} total={50} responsive={true} onChange={(current) => {
                    window.location("/blog/"+current)
                }}/>
            </div>

            <div className='comment-box'></div>
        </div>
    </div> 
    )
}
