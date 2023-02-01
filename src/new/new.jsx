import React from 'react'
import { Anchor, Col, Row } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { articleNew } from '../data';
import './new.css'
import ArticleCard from './articleCard';
import { useEffect } from 'react';

const { Meta } = Card;
export const New = () => {


  useEffect(()=>{
    console.log(articleNew()[0]);
  })


  return (
    <div className='new-container'>
      <Row>
        <Col>
          <div
            className='article-box new-content'
            id="article"
            style={{
              height: '100vh',
              background: 'white',
            }}
          >


            {articleNew().map((item=>{return (
                <ArticleCard 
                title="Java Course"
                description="A course for java beginner"
                avatarURL="https://joeschmoe.io/api/v1/random"
                coverImageURL="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                coverImageDescription="Java course for beginner"
            />)
            }))}
          </div>
          
          <div
            className='video-box new-content'
            id="video"
            style={{
              height: '100vh',
              background: 'white',
            }}
          />
          <div
            className='toadd-box new-content'
            id="toadd"
            style={{
              height: '100vh',
              background: 'white',
            }}
          />
        </Col>
        <Col>
          <Anchor
            className='new-side-nav'
            items={[
              {
                key: 'article',
                href: '#article',
                title: 'Article',
              },
              {
                key: 'video',
                href: '#video',
                title: 'Video',
              },
              {
                key: 'toadd',
                href: '#toadd',
                title: 'ToAdd',
              },
            ]}
          />
        </Col>
      </Row>
    </div>
  )
}
