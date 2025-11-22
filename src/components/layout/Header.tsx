// src/components/layout/Header.tsx
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logos/flm-logo-white-on-blue.png";
import emblem from "../../assets/logos/emblem.png";

// TODO: adjust this import to wherever you put the PixelBurstLabel component
import PBLabel from "../common/PBLabel";

const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/departments", label: "Departments" },
    { to: "/articles", label: "Articles & Guides" },
    { to: "/success-stories", label: "Success Stories" },
    { to: "/resources", label: "Resources" },
    { to: "/gallery", label: "Gallery" },
    { to: "/get-involved", label: "Get Involved" },
    { to: "/contact", label: "Contact & Support" },
];

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const hero = document.querySelector(".page-hero");
            if (!hero) return;

            const rect = (hero as HTMLElement).getBoundingClientRect();
            const heroVisible = rect.bottom > 80; // still on dark background?

            setIsScrolled(!heroVisible);
        };

        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className="header">
            <div className="header__inner">
                <Link to="/" className="header__brand">
                    <div className="flm-emblem-box">
                        <img
                            src={emblem}
                            alt="FLM Emblem"
                            className="flm-emblem-img"
                        />
                    </div>
                    <div className="flm-logo-wrap">
                        <div
                            className={
                                "flm-logo-bg" + (isScrolled ? " flm-logo-bg--small" : "")
                            }
                        >
                            <img
                                src={logo}
                                alt="FLM - Fathers Lives Matter"
                                className="flm-logo-large"
                            />

                            <div className="flm-logo-slogan">
                                REUNITING FAMILIES.
                                <br />
                                PROTECTING CHILDREN.
                            </div>
                        </div>
                    </div>

                    <h1>Fathers Lives Matter</h1>
                </Link>

                {/* nav-run turns on the streak animations */}
                <nav className="header__nav nav-run">
                    {navItems.map((item, index) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                "header__link nav-link" +
                                (isActive ? " header__link--active nav-link--active" : "")
                            }
                            style={{ ["--seq" as any]: index }}   // timing for streak, ok if unused for now
                        >
                            <PBLabel text={item.label} burstSeed={item.to} />
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
