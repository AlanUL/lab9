import React, { useState } from "react";

function CommentForm({ onAddComment }) {
    const [name, setName] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!name || !body) {
            return;
        }

        onAddComment({ name, body });

        setName("");
        setBody("");
    };

    return (
        <form className="comment-box" onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <textarea 
                placeholder="Write a comment..." 
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
            />
            <button type="submit">Post</button>
        </form>
    );
}

export default CommentForm;