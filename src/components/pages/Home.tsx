// src/pages/Home.tsx
import React from "react";
import PageHero from "../common/PageHero";
import Section from "../common/Section";
import StatBar from "../common/StatBar";
import CardGrid from "../common/CardGrid";
import { departments } from "../../data/departments";
import { featuredArticles } from "../../data/articles";
import { featuredStories } from "../../data/stories";
import DepartmentCard from "../common/DepartmentCard";
import StoryCard from "../common/StoryCard";
import ArticleCard from "../common/ArticleCard";
import ParticlesBackground from "../ParticlesBackground";

const Home: React.FC = () => {
    return (
        <>
            <PageHero
                kicker="FLM - Fathers Lives Matter"
                title="Reuniting families. Protecting children."
                subtitle="We stand with fathers facing parental alienation, blocked contact, false allegations and systemic bias and we fight for the child's right to both parents wherever it is safe."
                primaryActionLabel="I need help now"
                primaryActionTo="/contact#emergency"
                secondaryActionLabel="Join the movement"
                secondaryActionTo="/get-involved"
            />

            <StatBar
                items={[
                    {
                        label:
                            "Children do best when both safe parents are lovingly involved.",
                        value: "Principal 1"
                    },
                    {
                        label:
                            "FLM supports fathers facing alienation, obstruction and false allegations.",
                        value: "Principal 2"
                    },
                    {
                        label:
                            "We turn private pain into organised action and evidence-based change.",
                        value: "Principal 3"
                    }
                ]}
            />

            {/* WHEN YOUR CHILD IS KEPT FROM YOU – WITH PARTICLES */}
            <Section variant="navy">
                <h2>When your child is kept from you</h2>
                <p>
                    Blocked contact, untested allegations and slow systems leave many
                    fathers feeling helpless. You are not alone, and you are not powerless.
                </p>

                <div id="flm-band-top" className="section-with-lines">
                    <ParticlesBackground targetId="flm-band-top" />

                    <CardGrid
                        columns="three"
                        items={[
                            {
                                title: "Parental alienation",
                                body: "Recognise patterns of behaviour that turn a child against a loving parent.",
                                link: "/articles/parental-alienation-basics"
                            },
                            {
                                title: "Obstruction of contact",
                                body: "Learn how to document missed visits and respond calmly but firmly.",
                                link: "/articles/obstruction-of-contact"
                            },
                            {
                                title: "False allegations",
                                body: "Respond with evidence and stability, not panic and rage.",
                                link: "/articles/false-allegations-guide"
                            }
                        ]}
                    />
                </div>
            </Section>

            <Section variant="light">
                <h2>Departments at FLM</h2>
                <p>
                    Each department focuses on a different part of the struggle fathers
                    face from court to social services, mental health, work, investigations
                    and public campaigns.
                </p>
                <div className="grid grid--three">
                    {departments.map((d) => (
                        <DepartmentCard key={d.path} department={d} />
                    ))}
                </div>
            </Section>

            <Section>
                <h2>Latest articles &amp; guides</h2>
                <p>
                    Practical information to help you act with strength instead of
                    desperation.
                </p>
                <div className="grid grid--three">
                    {featuredArticles.map((a) => (
                        <ArticleCard key={a.slug} article={a} />
                    ))}
                </div>
            </Section>

            {/* SUCCESS STORIES – WITH PARTICLES */}
            <Section variant="dark">
                <h2>Success stories</h2>
                <p>
                    These stories are shared with consent. Details are sometimes changed to
                    protect children, but the hope is real.
                </p>

                <div id="flm-band-stories" className="section-with-lines">
                    <ParticlesBackground targetId="flm-band-stories" />

                    <div className="grid grid--two">
                        {featuredStories.map((s) => (
                            <div key={s.id} className="card card--light">
                                <div className="card__category">
                                    {s.region ? s.region.toUpperCase() : "SUCCESS STORY"}
                                </div>
                                <h3>{s.title}</h3>
                                <p>{s.summary}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section variant="light">
                <h2>The child at the centre</h2>
                <p>
                    FLM is not here to win a war between parents. We exist to protect the
                    child's right to a safe, loving relationship with both parents wherever
                    possible. Every guide, every campaign and every conversation asks one
                    question first:{" "}
                    <strong>"What is best for this child in the long run?"</strong>
                </p>
            </Section>
        </>
    );
};

export default Home;
