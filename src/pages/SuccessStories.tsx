import React from "react";
import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import { stories } from "../data/stories";
import StoryCard from "../components/common/StoryCard";

const SuccessStories: React.FC = () => {
    return (
        <>
<PageHero
    title="Success Stories"
    subtitle="Real fathers, real children, real hope."
    kicker="Stories"
/>
<Section variant="light">
    <p>
        These stories are shared with consent. Some names and details are
        changed to protect children, but the hope is real. If you are in the
        middle of a long battle, let these remind you that change is possible.
    </p>
    <div className="grid grid--two">
        {stories.map((s) => (
            <StoryCard key={s.title} story={s} />
        ))}
    </div>
</Section>
<Section>
    <h2>Share your story</h2>
    <p>
        When you&apos;re ready, sharing your story can help other fathers feel
        less alone. In a future version of this site, you&apos;ll be able to
        submit your story through a dedicated form. For now, please contact us
        via the <strong>Contact &amp; Support</strong> page if you would like
        to share what you&apos;ve been through.
    </p>
</Section>
</>
    );
};

export default SuccessStories;