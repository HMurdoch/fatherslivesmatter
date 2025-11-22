import React from "react";
import PageHero from "../../components/common/PageHero";
import Section from "../../components/common/Section";

const Investigations: React.FC = () => {
    return (
        <>
<PageHero
                title="Investigations"
                subtitle="Finding the facts without crossing the line."
                kicker="Department"
            />
<Section variant="light">
                <p>
                    When a child is moved without consent, when contact arrangements are
                    ignored, or when stories simply do not add up, it is natural to want
                    answers. The Investigations Department focuses on lawful, ethical
                    evidence gathering that protects you and your child.
                </p>
                <h2>What we see every day</h2>
                <ul>
                    <li>Parents who no longer know where their child is staying.</li>
                    <li>Threatening messages that are not properly captured as evidence.</li>
                    <li>
                        Temptation to spy, hack or secretly record in ways that backfire
                        legally.
                    </li>
                </ul>
                <h2>How we can help</h2>
                <ul>
                    <li>Guides on keeping a clear record of events and communications.</li>
                    <li>
                        Information on recording, tracking and privacy laws (which vary by
                        country).
                    </li>
                    <li>
                        Advice on when to involve the police and how to open a case correctly.
                    </li>
                    <li>Referrals to reputable private investigators where lawful.</li>
                </ul>
                <p className="form__hint">
                    FLM does not encourage or condone any unlawful activity. All
                    investigative actions must comply with local laws and respect the safety
                    and privacy of children and adults.
                </p>
            </Section>
</>
    );
};

export default Investigations;