import React from "react";

function CommentList({ comments }) {

    if (!comments || comments.length === 0) {
        return (
            <div className="comment-section">
                <p>No comments yet. Be the first to comment!</p>
            </div>
        );
    }

    return (
        <div className="comment-section">
            <ul className="comment-items">
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <strong>{comment.name}:</strong> {comment.body}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CommentList;