import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
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
    const navigate = useNavigate();
    const createNewBlog = ()=>{
        navigate("/blog/new");
    }

  return (
    <div className='blog-container'>
        <FloatButton onClick={createNewBlog} />
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
                    navigate("/blog/"+current)
                }}/>
            </div>

            <div className='comment-box'></div>
        </div>
    </div> 
    )
}
