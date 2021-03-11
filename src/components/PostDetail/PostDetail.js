import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Comment from '../../Comment/Comment';
import './PostDetail.css';

const PostDetail = () => {
    const {id} = useParams();

    const [post, setPost] =  useState({})
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    },[id])

    const [comments, setComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data => setComments(data))
    },[id])


    const history = useHistory();
    const previousPage = () => {
        const url = `/`;
        history.push(url);
    }

    return (
        <div>
            <button onClick={() => previousPage()}>Previous Page</button>
            <h3>Post Detail:{id}</h3>
            <p>Title: <strong>{post.title}</strong> </p>
            <p>Body posted: {post.body}</p>
            <section className="comment-section">
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
            </section>
        </div>
    );
};

export default PostDetail;