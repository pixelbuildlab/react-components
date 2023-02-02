import React from "react";
import { faker } from '@faker-js/faker';

const CommentDetail=(props)=>{
    
    return(
    <div className="comment">
    <a href="/" className="avatar">
        <img alt="avater" src={faker.image.avatar()}/>
    </a>
    <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
            <span className="date">5 Days ago</span>
        
        </div>
        <div className="text">
            This is new comment.
        </div>
    </div>
</div>
    );
}
export default CommentDetail;