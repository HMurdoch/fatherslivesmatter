// src/components/common/PBLabel.tsx
import React, { useMemo, useState, useCallback } from "react";

export interface PBLabelProps {
    text: string;
    burstSeed?: string | number;
}

/** Deterministic pseudo-random based on a numeric seed. */
function seededRandom(seed: number) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

/**
 * PBLabel
 * - Renders per-letter burst animation.
 * - Has a streak line under the word.
 * - Re-mounts children on hover so CSS animations replay.
 */
const PBLabel: React.FC<PBLabelProps> = ({ text, burstSeed = 1 }) => {
    const [burstId, setBurstId] = useState(0);

    const letters = useMemo(() => text.split(""), [text]);

    const handleMouseEnter = useCallback(() => {
        // bump the id so all children get new keys and remount
        setBurstId((id) => id + 1);
    }, []);

    return (
        <span className="pixel-word" onMouseEnter={handleMouseEnter}>
            {letters.map((ch, index) => {
                const baseSeed =
                    typeof burstSeed === "string"
                        ? burstSeed.length * 31 + index
                        : Number(burstSeed) + index;

                const dx = (seededRandom(baseSeed) - 0.5) * 18;
                const dy = (seededRandom(baseSeed * 2) - 0.5) * 18;
                const delay = `${index * 55}ms`;

                return (
                    <span
                        key={`${burstId}-${index}`}
                        className="pixel-word__ch"
                        style={
                            {
                                "--dx": `${dx}px`,
                                "--dy": `${dy}px`,
                                "--delay": delay,
                            } as React.CSSProperties
                        }
                    >
                        {ch}
                    </span>
                );
            })}

            {/* streak gets a key tied to burstId so its animation restarts too */}
            <span key={`streak-${burstId}`} className="streak" />
        </span>
    );
};

export default PBLabel;