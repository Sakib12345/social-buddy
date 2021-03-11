import React from 'react';
import './Comment.css'

const Comment = (props) => {
    const {name, email, body}  = props.comment;
    return (
        <div className="comment">
            <h3>TITLE: {name}</h3>
            <h5>EMAIL: {email}</h5>
            <p>Body: {body}</p>
        </div>
    );
};

export default Comment;