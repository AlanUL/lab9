import React from "react";
import CommentList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";

function BlogPost({ post, author, comments, onAddComment }) {
    const { title, body } = post;
    const { name, email } = author;

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
                <CommentForm onAddComment={onAddComment} />
            </section>
        </article>
    );
}

export default BlogPost;