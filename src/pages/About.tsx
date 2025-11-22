import React from "react";
import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";

const About: React.FC = () => {
    return (
        <>
            <PageHero
                title="Fathers Lives Matter"
                subtitle="Our promise, our fight."
                kicker="About FLM"
            />
            <Section variant="light">
                <h2>Why FLM exists</h2>
                <p>
                    Every child deserves the love, protection and guidance of both parents.
                    Yet across courtrooms, social service offices and everyday homes, loving
                    fathers are being pushed out of their children&apos;s lives. Contact is
                    blocked. Allegations are made without proper testing. Delays stretch
                    from months into years. Children are left in the middle of adult
                    conflict, forced to choose sides, told one parent is "dangerous" or
                    "unnecessary" when that is not supported by evidence.
                </p>
                <p>
                    Fathers Lives Matter (FLM) was created by fathers, families and
                    professionals who have lived this reality. We are not against mothers.
                    We are against injustice, manipulation and any system that allows a
                    child to lose a safe, loving parent.
                </p>
            </Section>
            <Section>
                <h2>What we believe</h2>
                <ul>
                    <li>
                        Children thrive when they have strong, healthy relationships with{" "}
                        <strong>both</strong> parents, wherever it is safe to do so.
                    </li>
                    <li>
                        Evidence, accountability and the best interests of the child must come
                        before conflict, money or personal agendas.
                    </li>
                    <li>
                        Parental alienation, obstruction of contact and false allegations are
                        forms of emotional abuse that must be taken seriously.
                    </li>
                    <li>
                        Fathers are not visitors or spare parents. They are essential to
                        their children&apos;s lives.
                    </li>
                </ul>
                <p>
                    FLM exists to turn private pain into organised action. We provide
                    information, support, research and advocacy for fathers and families
                    facing an unfair system. We connect men who feel isolated and blamed.
                    We work with lawyers, psychologists, social workers and other
                    organisations who share the conviction that children should not lose a
                    parent because of bias, neglect or manipulation.
                </p>
            </Section>
            <Section variant="navy">
                <h2>Our values</h2>
                <ul>
                    <li>
                        <strong>Truth</strong> – honest evidence, full context and careful
                        listening.
                    </li>
                    <li>
                        <strong>Integrity</strong> – lawful, respectful, non-violent
                        advocacy.
                    </li>
                    <li>
                        <strong>Courage</strong> – speaking up where others stay silent.
                    </li>
                    <li>
                        <strong>Hope</strong> – helping fathers hold on when they are told to
                        give up.
                    </li>
                </ul>
                <p>
                    This is more than a slogan. It is a movement.
                    <br />
                    <strong>Fathers Lives Matter – because every child&apos;s future
                        does.</strong>
                </p>
            </Section>
        </>
    );
};

export default About;
