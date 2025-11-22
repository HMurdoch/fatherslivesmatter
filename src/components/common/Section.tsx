import React from "react";

type Variant = "default" | "light" | "navy" | "dark";

interface Props {
    variant?: Variant;
    children: React.ReactNode;
}

const Section: React.FC<Props> = ({ variant = "default", children }) => {
    const className =
        "section" +
            (variant === "light" ? " section--light" : "") +
            (variant === "navy" ? " section--navy" : "") +
            (variant === "dark" ? " section--dark" : "");

    return (
        <section className={className}>
            <div className="section__inner">{children}</div>
        </section>
    );
};

export default Section;