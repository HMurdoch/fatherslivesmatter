import React from "react";

export interface StatItem {
    label: string;
    value: string;
}

// Accept both structured items and plain strings
export type StatItemsProp = StatItem[] | string | string[] | undefined;

export interface StatBarProps {
    items?: StatItemsProp;
}

function normaliseItems(items: StatItemsProp): StatItem[] {
    if (!items) return [];

    if (Array.isArray(items)) {
        // Array of StatItem objects
        if (items.length === 0) return [];
        if (typeof items[0] === "string") {
            // Array of strings -> value only
            return (items as string[]).map((v, idx) => ({
                label: "",
                value: v,
            }));
        }
        return items as StatItem[];
    }

    if (typeof items === "string") {
        // Single string -> single item
        return [{ label: "", value: items }];
    }

    return [];
}

const StatBar: React.FC<StatBarProps> = ({ items }) => {
    const list = normaliseItems(items);

    return (
        <div className="statbar">
            <div className="statbar__inner">
                {list.map((item, index) => (
                    <div key={item.label || index}>
                        <strong>{item.value}</strong>
                        {item.label && (
                            <>
                            {" "}
                            - <span>{item.label}</span>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatBar;