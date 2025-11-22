import React from "react";
import PageHero from "../../components/common/PageHero";
import Section from "../../components/common/Section";

const WorkplaceHR: React.FC = () => {
    return (
        <>
<PageHero
                title="Workplace & HR Support"
                subtitle="When legal battles spill into your work life."
                kicker="Department"
            />
<Section variant="light">
                <p>
                    Court dates, emergencies and emotional strain do not pause during
                    office hours. Many fathers worry that telling their employer about
                    their situation will lead to judgement or even job loss. Our Workplace
                    & HR Support Department helps fathers understand their rights at work,
                    navigate difficult conversations and manage the impact of legal
                    processes on their careers.
                </p>
                <h2>What we see every day</h2>
                <ul>
                    <li>Fathers disciplined for taking time off for court or meetings.</li>
                    <li>Men under-performing because of unacknowledged stress.</li>
                    <li>
                        Employers who want to help but are unsure what reasonable support
                        looks like.
                    </li>
                </ul>
                <h2>How we can help</h2>
                <ul>
                    <li>
                        Guidance on how to speak to HR or your manager about your situation
                        professionally.
                    </li>
                    <li>
                        Sample letters requesting flexibility around court hearings or
                        assessments.
                    </li>
                    <li>
                        Tips on separating work communication from personal conflict and
                        legal matters.
                    </li>
                </ul>
                <p className="form__hint">
                    Employment law varies between countries and employers. Our information
                    is general and does not replace individual legal or HR advice.
                </p>
            </Section>
</>
    );
};

export default WorkplaceHR;