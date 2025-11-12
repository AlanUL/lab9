import React from "react";

function ContactPage() {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted! (This is a demo and no data was sent)");
    };

    return (
        <div className="contact-form-container">
            <h1>Contact Us</h1>
            <p>Please fill out the form below to get in touch.</p>
            
            <form className="comment-box" onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    id="name"
                    placeholder="Your Name" 
                    required 
                />
                
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email"
                    placeholder="Your Email" 
                    required 
                />
                
                <label htmlFor="message">Message:</label>
                <textarea 
                    id="message" 
                    placeholder="Your Message" 
                    rows="5" 
                    required
                ></textarea>
                
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default ContactPage;