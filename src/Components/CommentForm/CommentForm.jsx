import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function CommentForm({ onAddComment }) {
    const [body, setBody] = useState("");
    
    const { user } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!body || !user) {
            return;
        }

        onAddComment({ name: user.name, body });

        setBody("");
    };

    return (
        <form className="comment-box" onSubmit={handleSubmit}>            
            <textarea 
                placeholder="Write a comment..." 
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
            />
            <button type="submit">Post Comment</button>
        </form>
    );
}

export default CommentForm;
