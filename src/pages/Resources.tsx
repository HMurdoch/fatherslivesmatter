import React from "react";
import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import CardGrid from "../components/common/CardGrid";

const Resources: React.FC = () => {
    return (
        <>
            <PageHero
                title="Resources"
                subtitle="Guides, links and tools to support fathers and families."
                kicker="Support"
            />
            <Section variant="light">
                <CardGrid
                    columns="three"
                    items={[
                        {
                            title: "Legal frameworks",
                            body: "Links to key legislation and official guides in your country or region.",
                            light: true
                        },
                        {
                            title: "Support organisations",
                            body: "Helplines, mental health services and family support organisations.",
                            light: true
                        },
                        {
                            title: "Templates & downloads",
                            body: "Contact logs, letter templates and checklists you can adapt to your case.",
                            light: true
                        }
                    ]}
                />
                <p className="form__hint" style={{ marginTop: "1rem" }}>
                    This is a starting point. As FLM grows, this page can become a full
                    directory of father-friendly professionals and services in different
                    regions.
                </p>
            </Section>
        </>
    );
};

export default Resources;