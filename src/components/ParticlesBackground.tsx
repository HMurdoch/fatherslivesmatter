import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

/**
 * Full-page particles background, rendered once and kept behind everything.
 */
const ParticlesBackground: React.FC = () => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        // Initialise the particles engine once
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => {
            setReady(true);
        });
    }, []);

    if (!ready) {
        // don’t render until the engine is initialised
        return null;
    }

    return (
        <Particles
            id="flm-particles"
            className="flm-particles"
            options={{
                fullScreen: {
                    enable: false, // we will position it with CSS instead
                },
                background: {
                    color: {
                        value: "#050b11", // base dark tone
                    },
                },
                fpsLimit: 60,
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    color: {
                        value: "#1c8bd9", // FLM-ish blue
                    },
                    links: {
                        enable: true,
                        color: "#1c8bd9",
                        distance: 140,
                        opacity: 0.35,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        direction: "none",
                        speed: 0.7,
                        outModes: {
                            default: "bounce",
                        },
                    },
                    opacity: {
                        value: 0.5,
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                    shape: {
                        type: "circle",
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            links: {
                                opacity: 0.5,
                            },
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBackground;
