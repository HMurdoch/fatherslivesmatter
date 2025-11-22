import React from "react";

const VolunteerForm: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: wire up to EmailJS or your API
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__field">
                <label className="form__label" htmlFor="vol-name">
                    Full name
                </label>
                <input className="form__input" id="vol-name" name="name" required />
            </div>
            <div className="form__field">
                <label className="form__label" htmlFor="vol-email">
                    Email
                </label>
                <input
                    className="form__input"
                    id="vol-email"
                    name="email"
                    type="email"
                    required
                />
            </div>
            <div className="form__field">
                <label className="form__label" htmlFor="vol-phone">
                    Phone / WhatsApp
                </label>
                <input
                    className="form__input"
                    id="vol-phone"
                    name="phone"
                    type="tel"
                />
            </div>
            <div className="form__field">
                <label className="form__label">Areas where you can help</label>
                <div className="form__hint">
                    Tick all that apply. We&apos;ll contact you about suitable roles.
                </div>
                <div>
                    {[
                        "Legal / paralegal support",
                        "Psychology / counselling",
                        "IT / data / development",
                        "Social media / design / PR",
                        "Fundraising",
                        "Administration / coordination",
                        "Peer support / mentoring"
                    ].map((opt) => (
                        <label key={opt} className="flex items-center gap-2 text-sm">
                            <input type="checkbox" name="skills" value={opt} /> {opt}
                        </label>
                    ))}
                </div>
            </div>
            <div className="form__field">
                <label className="form__label" htmlFor="vol-motivation">
                    Why do you want to volunteer with FLM?
                </label>
                <textarea
                    className="form__textarea"
                    id="vol-motivation"
                    name="motivation"
                    required
                />
            </div>
            <button type="submit" className="btn">
                Offer to volunteer
            </button>
        </form>
    );
};

export default VolunteerForm;
