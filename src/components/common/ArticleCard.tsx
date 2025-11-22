import React from "react";
import { Link } from "react-router-dom";
import { ArticleMeta } from "../../data/articles";

interface Props {
    article: ArticleMeta;
}

const ArticleCard: React.FC<Props> = ({ article }) => (
    <Link to={`/articles/${article.slug}`} className="article-card">
        <div className="article-card__category">{article.category}</div>
        <h3 className="article-card__title">{article.title}</h3>
        <p className="article-card__excerpt">{article.summary}</p>
        <span className="article-card__read">{article.readTime} read</span>
    </Link>
);

export default ArticleCard;