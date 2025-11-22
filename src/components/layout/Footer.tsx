import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div>
                    <strong>Fathers Lives Matter Foundation</strong>
                    <div className="footer__meta">
                        Reuniting families. Exposing injustice. Supporting fathers and
                        children.
                    </div>
                </div>
                <div className="footer__meta">
                    <span>Need help?</span>{" "}
                    <Link to="/contact">Contact &amp; Support</Link>
                </div>
                <div className="footer__meta">
                    &copy; {new Date().getFullYear()} Fathers Lives Matter (FLM).
                    All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;