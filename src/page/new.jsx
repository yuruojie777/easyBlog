import React from 'react'
import '../css/new.css'
import {Carousel} from "antd";

export const New = () => {


  return (
    <div>
        <div className="ratio ratio-16x9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/QdHvS0D1zAI"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </div>
        <div className="ratio ratio-16x9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/iL_oZGHLHvU"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </div>
        <div className="ratio ratio-16x9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/8J88mIH_SDU"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </div>
        <div className="ratio ratio-16x9">
            <iframe src="//player.bilibili.com/player.html?aid=928861104&bvid=BV1uT4y1P7CX&cid=287639008&page=1"
                    scrolling="no" border="0" frameBorder="no" framespacing="0" allowFullScreen="true"></iframe>
        </div>
    </div>
  )
}
