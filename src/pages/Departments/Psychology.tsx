import React from "react";
import PageHero from "../../components/common/PageHero";
import Section from "../../components/common/Section";

const Psychology: React.FC = () => {
    return (
        <>
            <PageHero
                title="Psychology & Child Welfare"
                subtitle="Protecting children from invisible wounds."
                kicker="Department"
            />
            <Section variant="light">
                <p>
                    Children caught in the middle of conflict rarely have the language to
                    describe what they are going through. Our Psychology & Child Welfare
                    Department focuses on the emotional impact of parental alienation,
                    blocked contact and prolonged court battles, and helps families connect
                    with appropriate professionals.
                </p>
                <h2>What we see every day</h2>
                <ul>
                    <li>
                        Children who suddenly reject a previously loved parent without clear
                        cause.
                    </li>
                    <li>
                        Young people who feel they must choose sides to keep one parent
                        happy.
                    </li>
                    <li>
                        Fathers breaking down mentally but afraid to ask for help in case it
                        is used against them.
                    </li>
                </ul>
                <h2>How we can help</h2>
                <ul>
                    <li>
                        Explainers on child development and how conflict affects children at
                        different ages.
                    </li>
                    <li>
                        Guidance on speaking to your child in a supportive, non-pressuring,
                        age-appropriate way.
                    </li>
                    <li>
                        Referrals to child therapists, family therapists and support groups
                        where possible.
                    </li>
                    <li>
                        Resources on coping with your own mental health challenges during
                        prolonged conflict.
                    </li>
                </ul>
                <p className="form__hint">
                    FLM is not a mental health clinic. We help you find qualified
                    professionals. If you or your child are in crisis, please contact
                    emergency services or a mental health hotline immediately.
                </p>
            </Section>
        </>
    );
};

export default Psychology;
