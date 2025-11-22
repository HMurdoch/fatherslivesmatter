import React from "react";
import { useParams, Link } from "react-router-dom";
import PageHero from "../../components/common/PageHero";
import Section from "../../components/common/Section";
import { articles } from "../../data/articles";

/**
 * Placeholder for future dynamic routing with full article bodies.
 * For now, it simply shows the meta data and a "coming soon" note.
 */
const ArticleView: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        return (
            <>
                <PageHero title="Article not found" />
                <Section variant="light">
                    <p>
                        We couldn&apos;t find that article.{" "}
                        <Link to="/articles">Back to all articles.</Link>
                    </p>
                </Section>
            </>
        );
    }

    return (
        <>
            <PageHero
                title={article.title}
                subtitle={`${article.category} • ${article.readTime} read`}
                kicker="Article"
            />
            <Section variant="light">
                <p>{article.summary}</p>
                <p className="form__hint">
                    The full article text will appear here in a future update. For now,
                    this is a placeholder page in the FLM prototype.
                </p>
                <p>
                    <Link to="/articles">&larr; Back to all articles</Link>
                </p>
            </Section>
        </>
    );
};

export default ArticleView;