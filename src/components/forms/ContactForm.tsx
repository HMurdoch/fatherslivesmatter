import React from "react";

const ContactForm: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: wire up to EmailJS or your API
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__field">
                <label className="form__label" htmlFor="name">
                    Name
                </label>
                <input className="form__input" id="name" name="name" required />
            </div>
            <div className="form__field">
                <label className="form__label" htmlFor="email">
                    Email
                </label>
                <input
                    className="form__input"
                    id="email"
                    name="email"
                    type="email"
                    required
                />
            </div>
            <div className="form__field">
                <label className="form__label" htmlFor="subject">
                    Subject
                </label>
                <input className="form__input" id="subject" name="subject" required />
            </div>
            <div className="form__field">
                <label className="form__label" htmlFor="message">
                    Message
                </label>
                <textarea
                    className="form__textarea"
                    id="message"
                    name="message"
                    required
                />
            </div>
            <button type="submit" className="btn">
                Send message
            </button>
        </form>
    );
};

export default ContactForm;