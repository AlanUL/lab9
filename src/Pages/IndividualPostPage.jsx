import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogPost from "../Components/BlogPost/BlogPost";

function IndividualPostPage() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [author, setAuthor] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        
        const fetchPost = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(res => res.json());
        const fetchComments = fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(res => res.json());

        Promise.all([fetchPost, fetchComments])
            .then(([postData, commentsData]) => {
                setPost(postData);
                setComments(commentsData); 
                
                return fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`);
            })
            .then(res => res.json())
            .then(authorData => {
                setAuthor(authorData);
            })
            .catch(err => console.error("Error fetching data:", err))
            .finally(() => setLoading(false));

    }, [postId]);


    const handleAddComment = (newComment) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
            method: 'POST',
            body: JSON.stringify({
                name: newComment.name,
                body: newComment.body,
                email: "user@example.com",
                postId: postId
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.json())
        .then(postedComment => {

            const commentToadd = {
                ...newComment,
                id: postedComment.id,
                body: newComment.body
            };
            
            setComments(currentComments => [commentToadd, ...currentComments]);
        })
        .catch(err => console.error("Error posting comment:", err));
    };

    if (loading) return <h2>Loading...</h2>;

    if (!post || !author) {
        return <h2>Loading Post...</h2>;
    }
    
    return <BlogPost 
                post={post} 
                author={author} 
                comments={comments} 
                onAddComment={handleAddComment} 
            />;
}

export default IndividualPostPage;