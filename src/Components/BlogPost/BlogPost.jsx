import React from "react";
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";

import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

function BlogPost({ post, author, comments, onAddComment }) {
    const { title, body } = post;
    const { name, email } = author;

    const { user } = useAuth();

    return (
        <article className="post-card">
            <header>
                <h2>{title}</h2>
                <p>{body}</p>
            </header>

            <section className="post-meta">
                <p><strong>Author:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
            </section>

            <section className="comments">
                <h3>Comments</h3>
                <CommentList comments={comments} />
                
                {user ? (
                    <CommentForm onAddComment={onAddComment} />
                ) : (
                    <p className="login-prompt">
                        <strong>Please <Link to="/login">log in</Link> to post a comment.</strong>
                    </p>
                )}

            </section>
        </article>
    );
}

export default BlogPost;