import { Avatar } from '@material-ui/core'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import React, { forwardRef } from 'react'
import FeedOption from './FeedOption'
import './Post.css'

const Post = forwardRef(({description,photoUrl,message,name},ref) =>{
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="postHeader__info">
                    <h4>{name}</h4>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
                <FeedOption Icon={ThumbUpAltOutlined} title="Like" color="gray"/>
                <FeedOption Icon={ChatOutlined} title="Comment" color="gray"/>
                <FeedOption Icon={ShareOutlined} title="share" color="gray"/>
                <FeedOption Icon={SendOutlined} title="Send" color="gray"/>
            </div>
        </div>
    )
})

export default Post
