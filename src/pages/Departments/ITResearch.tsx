import React from "react";
import PageHero from "../../components/common/PageHero";
import Section from "../../components/common/Section";

const ITResearch: React.FC = () => {
    return (
        <>
<PageHero
                title="IT, Research & Data"
                subtitle="Turning stories into evidence for change."
                kicker="Department"
            />
<Section variant="light">
                <p>
                    Individual stories are powerful. When combined, they reveal patterns
                    that are impossible to ignore. The IT, Research & Data Department
                    collects anonymised information to highlight systemic issues and builds
                    digital tools that make it easier for fathers to track events and
                    access resources.
                </p>
                <h2>What we do</h2>
                <ul>
                    <li>
                        Maintain secure systems for storing anonymised case information.
                    </li>
                    <li>
                        Analyse trends in contact orders, delays, outcomes and complaints.
                    </li>
                    <li>
                        Publish reports that highlight where fathers and children are
                        consistently disadvantaged.
                    </li>
                    <li>
                        Develop simple online tools such as contact logs and resource
                        finders.
                    </li>
                </ul>
                <p className="form__hint">
                    All data is stored and used in line with privacy laws and our internal
                    data protection policies. We never publish identifying information
                    without explicit consent.
                </p>
            </Section>
</>
    );
};

export default ITResearch;