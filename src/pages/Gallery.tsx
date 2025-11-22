// src/pages/Gallery.tsx
import React from "react";
import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";

const Gallery: React.FC = () => {
    return (
        <>
            <PageHero
                title="Gallery"
                subtitle="Posters, logos and visuals from the Fathers Lives Matter movement."
                kicker="Media"
            />
            <Section variant="light">
                <h2>Campaign imagery</h2>
                <p>
                    This is a placeholder gallery for the FLM prototype. Replace this
                    section with real posters, event photos and artwork as the movement
                    grows.
                </p>

                <div className="grid grid--two" style={{ marginTop: "1.5rem" }}>
                    <div className="card card--light">
                        <h3>Logo set</h3>
                        <p>
                            Use the dark and light FLM logo variants on headers, documents and
                            social media. Keep plenty of clear space around the mark so it
                            stays strong and legible.
                        </p>
                    </div>

                    <div className="card card--light">
                        <h3>Poster series</h3>
                        <p>
                            Create a series of FLM posters with consistent colours and
                            typography: navy, cream and bold messaging about fathers, children
                            and justice.
                        </p>
                    </div>
                </div>
            </Section>
        </>
    );
};

export default Gallery;