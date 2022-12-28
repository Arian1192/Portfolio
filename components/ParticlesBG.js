import { Children, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

const ParticlesBG = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await container.refresh();
    }, []);

    return (
        <Particles
            height="500px"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: false,
                    zIndex: 0
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                        onClick: {
                            enable: true,
                            mode: "repulse"
                        }
                    },
                    modes: {
                        repulse: {
                            distance: 80,
                            duration: 0.2,
                        },

                    },
                },
                particles: {
                    color: {
                        value: "#ffffb3",
                        animation: {
                            enable: true,
                            speed: 2,
                            sync: true,
                        },

                    },
                    links: {
                        color: "#ffffff",
                        distance: 170,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 400,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    smooth: {
                        enable: true,

                    },
                    speed: {
                    min: 0.5, max: 0.8,
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBG;