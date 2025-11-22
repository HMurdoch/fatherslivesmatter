import React from "react";
import PageHero from "../../components/common/PageHero";
import Section from "../../components/common/Section";

const SocialServices: React.FC = () => {
    return (
        <>
            <PageHero
                title="Social Services"
                subtitle="Working with welfare systems, not against them."
                kicker="Department"
            />
            <Section variant="light">
                <p>
                    Social workers, family advocates and welfare organisations can play a
                    crucial role in protecting children. They can also become part of the
                    problem when they accept one-sided information or rely on stereotypes.
                    Our Social Services Department helps fathers understand how these
                    systems work and how to engage constructively while still insisting on
                    fairness and accountability.
                </p>
                <h2>What we see every day</h2>
                <ul>
                    <li>Fathers excluded from assessments or key meetings.</li>
                    <li>Reports that repeat untested allegations as facts.</li>
                    <li>
                        Contact recommendations that ignore a father&apos;s history of caring
                        involvement.
                    </li>
                    <li>Long delays while children remain in conflict-filled homes.</li>
                </ul>
                <h2>How we can help</h2>
                <ul>
                    <li>
                        Guides on your rights and responsibilities when dealing with social
                        services.
                    </li>
                    <li>
                        Advice on communicating clearly and respectfully, in writing wherever
                        possible.
                    </li>
                    <li>
                        Templates for raising concerns and providing information in a
                        child-focused way.
                    </li>
                    <li>
                        Information on how to challenge or request review of reports you
                        believe are inaccurate.
                    </li>
                </ul>
                <p className="form__hint">
                    Our goal is not to attack individual professionals, but to promote
                    fair, evidence-based practice that recognises the importance of both
                    parents.
                </p>
            </Section>
        </>
    );
};

export default SocialServices;
