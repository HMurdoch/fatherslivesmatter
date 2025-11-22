import React from "react";
import { Story } from "../../data/stories";

interface Props {
    story: Story;
}

const StoryCard: React.FC<Props> = ({ story }) => {
    return (
        <div className="card card--light">
            <div className="card__category">{story.type}</div>
            <h3>{story.title}</h3>
            <p>{story.summary}</p>
            <div className="card__meta">{story.region}</div>
        </div>
    );
};

export default StoryCard;