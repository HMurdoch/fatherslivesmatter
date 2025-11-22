import React from "react";
import PageHero from "../../components/common/PageHero";
import Section from "../../components/common/Section";

const LegalAdvocacy: React.FC = () => {
    return (
        <>
            <PageHero
                title="Legal & Advocacy"
                subtitle="Navigating the system without losing yourself."
                kicker="Department"
            />
            <Section variant="light">
                <p>
                    The legal system is supposed to protect children and uphold justice.
                    For many fathers it feels confusing, slow and impossibly expensive.
                    FLM's Legal & Advocacy Department does not replace an attorney. Instead
                    we help you understand the process, ask the right questions, gather
                    evidence properly and make informed decisions with your legal team.
                </p>
                <h2>What we see every day</h2>
                <ul>
                    <li>Contact orders that are not enforced or are undermined.</li>
                    <li>
                        Allegations raised at the last minute, just before a visitation or
                        court date.
                    </li>
                    <li>Temporary "interim" arrangements that drag on for years.</li>
                    <li>
                        Fathers forced to accept unfair terms because they are exhausted or
                        out of money.
                    </li>
                </ul>
                <h2>How we can help</h2>
                <ul>
                    <li>Plain-language guides explaining common procedures.</li>
                    <li>Checklists to prepare for consultations with professionals.</li>
                    <li>Templates for keeping a clear contact log.</li>
                    <li>
                        Information on complaint processes when officials fail in their
                        duties.
                    </li>
                    <li>
                        Referrals to lawyers, mediators and organisations who respect
                        fathers roles and child-focused solutions.
                    </li>
                </ul>
                <p className="form__hint">
                    FLM provides general legal information, not legal representation. Always
                    obtain professional advice specific to your jurisdiction.
                </p>
            </Section>
        </>
    );
};

export default LegalAdvocacy;
