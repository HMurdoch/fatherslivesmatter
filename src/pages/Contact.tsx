import React from "react";
import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import ContactForm from "../components/forms/ContactForm";
import EmergencyHelpForm from "../components/forms/EmergencyHelpForm";

const Contact: React.FC = () => {
    return (
        <>
            <PageHero
                title="Contact & Support"
                subtitle="If your child is being withheld or you feel lost, reach out."
                kicker="Help"
            />
            <Section variant="navy">
                <div id="emergency">
                    <h2>Emergency help – my child is being withheld now</h2>
                    <p>
                        We are not a replacement for police, social services or your
                        attorney. We can, however, help you think clearly, document events and
                        connect you with further support.
                    </p>
                    <EmergencyHelpForm />
                </div>
            </Section>
            <Section variant="light">
                <h2>General enquiries</h2>
                <p>
                    For non-urgent questions, collaboration ideas or media enquiries, use
                    the form below.
                </p>
                <ContactForm />
            </Section>
        </>
    );
};

export default Contact;