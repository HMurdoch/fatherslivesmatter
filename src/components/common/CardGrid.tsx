import React from "react";
import { Link } from "react-router-dom";

export interface CardItem {
    title: string;
    body: string;
    link?: string;
    category?: string;
    meta?: string;
    light?: boolean;
}

interface CardGridProps {
    items: CardItem[];
    columns?: "one" | "two" | "three";
}

const CardGrid: React.FC<CardGridProps> = ({ items, columns = "three" }) => {
    const gridClass =
        "grid " +
        (columns === "two"
            ? "grid--two"
            : columns === "three"
            ? "grid--three"
            : "");

    return (
        <div className={gridClass}>
            {items.map((item) => {
                const cls = "card" + (item.light ? " card--light" : "");
                const content = (
                    <>
{item.category && (
                            <div className="card__category">{item.category}</div>
                        )}
<h3>{item.title}</h3>
<p>{item.body}</p>
{item.meta && <div className="card__meta">{item.meta}</div>}
</>
                );

                if (item.link) {
                    return (
                        <Link key={item.title} to={item.link} className={cls}>
                            {content}
                        </Link>
                    );
                }
                return (
                    <div key={item.title} className={cls}>
                        {content}
                    </div>
                );
            })}
        </div>
    );
};

export default CardGrid;