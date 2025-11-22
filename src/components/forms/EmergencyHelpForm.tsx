import React from "react";

const EmergencyHelpForm: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: wire up to EmailJS or your API
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__field">
                <label className="form__label" htmlFor="eh-name">
                    Your full name
                </label>
                <input className="form__input" id="eh-name" name="name" required />
            </div>
            <div className="form__field">
                <label className="form__label" htmlFor="eh-email">
                    Email
                </label>
                <input
                    className="form__input"
                    id="eh-email"
                    name="email"
                    type="email"
                    required
                />
            </div>
            <div className="form__field">
                <label className="form__label" htmlFor="eh-phone">
                    Mobile / WhatsApp
                </label>
                <input
                    className="form__input"
                    id="eh-phone"
                    name="phone"
                    type="tel"
                    required
                />
            </div>
            <div className="form__field">
                <label className="form__label" htmlFor="eh-location">
                    City / Town &amp; Country
                </label>
                <input
                    className="form__input"
                    id="eh-location"
                    name="location"
                    required
                />
            </div>
            <div className="form__field">
                <label className="form__label" htmlFor="eh-situation">
                    Briefly describe what is happening right now
                </label>
                <textarea
                    className="form__textarea"
                    id="eh-situation"
                    name="situation"
                    required
                />
                <div className="form__hint">
                    If anyone is in immediate physical danger, please also contact emergency
                    services.
                </div>
            </div>
            <button type="submit" className="btn">
                Send urgent request
            </button>
        </form>
    );
};

export default EmergencyHelpForm;
