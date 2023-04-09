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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/yN7ypxC7838"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </div>
    </div>
  )
}
