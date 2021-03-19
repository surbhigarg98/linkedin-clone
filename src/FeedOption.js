import React from 'react'
import './FeedOption.css'
function FeedOption({title,Icon,color}) {
    return (
        <div className="feedOption">
           <Icon style={{color:color}}/>
           <h4> { title}</h4> 
        </div>
    )
}

export default FeedOption
