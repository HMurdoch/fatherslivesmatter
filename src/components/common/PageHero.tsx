import React from "react";

export interface Cta {
    label: string;
    to: string;
}

export interface PageHeroProps {
    kicker?: string;
    title: string;
    subtitle?: string;

    // NEW flat props (Home.tsx)
    primaryActionLabel?: string;
    primaryActionTo?: string;
    secondaryActionLabel?: string;
    secondaryActionTo?: string;

    // OLD object props (other pages may still use this)
    primaryCta?: Cta;
    secondaryCta?: Cta;
}

const PageHero: React.FC<PageHeroProps> = ({
    kicker,
    title,
    subtitle,
    primaryActionLabel,
    primaryActionTo,
    secondaryActionLabel,
    secondaryActionTo,
    primaryCta,
    secondaryCta,
}) => {
    // Normalise both styles into unified values
    const primaryLabel = primaryActionLabel ?? primaryCta?.label;
    const primaryTo = primaryActionTo ?? primaryCta?.to;

    const secondaryLabel = secondaryActionLabel ?? secondaryCta?.label;
    const secondaryTo = secondaryActionTo ?? secondaryCta?.to;

    return (
        <header className="page-hero">
            <div className="page-hero__inner">
                {kicker && <p className="page-hero__kicker">{kicker}</p>}
                <h1 className="page-hero__title">{title}</h1>
                {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}

                {(primaryLabel || secondaryLabel) && (
                    <div className="page-hero__actions">
                        {primaryLabel && primaryTo && (
                            <a className="btn" href={primaryTo}>
                                {primaryLabel}
                            </a>
                        )}
                        {secondaryLabel && secondaryTo && (
                            <a className="btn btn--ghost" href={secondaryTo}>
                                {secondaryLabel}
                            </a>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
};

export default PageHero;