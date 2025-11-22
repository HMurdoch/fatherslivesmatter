import React from "react";
import PageHero from "../../components/common/PageHero";
import Section from "../../components/common/Section";

const MediaPR: React.FC = () => {
    return (
        <>
<PageHero
                title="Media, PR & Campaigns"
                subtitle="Giving fathers a voice."
                kicker="Department"
            />
<Section variant="light">
                <p>
                    Many fathers suffer in silence, afraid of being judged or ridiculed if
                    they speak about their struggles. The Media, PR & Campaigns Department
                    exists to change the narrative and show the reality: most fathers love
                    their children deeply and are fighting simply to be present.
                </p>
                <h2>What we do</h2>
                <ul>
                    <li>
                        Design public awareness campaigns, posters and social media content.
                    </li>
                    <li>
                        Work with journalists and media outlets to ensure fathers perspectives
                        are represented fairly.
                    </li>
                    <li>
                        Arrange interviews, events and online campaigns that highlight
                        systemic issues without attacking individuals.
                    </li>
                    <li>
                        Promote positive stories of reunited families and involved dads.
                    </li>
                </ul>
                <p className="form__hint">
                    We always prioritise the safety and privacy of children. We never
                    publish a story without consent and careful consideration of potential
                    harm.
                </p>
            </Section>
</>
    );
};

export default MediaPR;