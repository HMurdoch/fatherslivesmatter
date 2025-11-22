import React from "react";
import PageHero from "../../components/common/PageHero";
import Section from "../../components/common/Section";
import { articles } from "../../data/articles";
import ArticleCard from "../../components/common/ArticleCard";

const ArticlesIndex: React.FC = () => {
    return (
        <>
<PageHero
    title="Articles & Guides"
    subtitle="Information to help you act with strength instead of desperation."
    kicker="Resources"
/>
<Section variant="light">
    <div className="grid grid--three">
        {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
        ))}
    </div>
</Section>
</>
    );
};

export default ArticlesIndex;