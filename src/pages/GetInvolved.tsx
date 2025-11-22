import React from "react";
import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import VolunteerForm from "../components/forms/VolunteerForm";

const GetInvolved: React.FC = () => {
    return (
        <>
            <PageHero
                title="Get Involved"
                subtitle="Turn your pain, skills or compassion into action."
                kicker="Support FLM"
            />
            <Section variant="light">
                <h2>Ways to get involved</h2>
                <ul>
                    <li>Volunteer your professional skills.</li>
                    <li>Help coordinate local support groups and events.</li>
                    <li>Design or share FLM awareness content.</li>
                    <li>Partner with us as a professional or organisation.</li>
                </ul>
            </Section>
            <Section>
                <h2>Volunteer with FLM</h2>
                <p>
                    If you have time, skills or lived experience to offer, we&apos;d love
                    to hear from you. Complete the form below and we&apos;ll contact you
                    about opportunities as FLM grows.
                </p>
                <VolunteerForm />
            </Section>
        </>
    );
};

export default GetInvolved;