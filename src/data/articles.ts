export interface ArticleMeta {
    slug: string;
    title: string;
    summary: string;
    category: string;
    readTime: string;
}

export const articles: ArticleMeta[] = [
    {
        slug: "parental-alienation-basics",
        title: "Parental Alienation: What It Is and Why It Hurts Children",
        summary:
            "Understand the patterns of behaviour that turn a child against a loving parent.",
        category: "Parental Alienation",
        readTime: "7 min"
    },
    {
        slug: "obstruction-of-contact",
        title: "When Your Contact Is Blocked or Undermined",
        summary:
            "How to keep records, stay calm and escalate appropriately when visits are cancelled.",
        category: "Contact & Residency",
        readTime: "6 min"
    },
    {
        slug: "false-allegations-guide",
        title: "Responding to False Allegations Without Losing Yourself",
        summary:
            "A careful, evidence-based response can protect both you and your child when you are falsely accused.",
        category: "False Allegations",
        readTime: "10 min"
    }
];

export const featuredArticles = articles.slice(0, 3);