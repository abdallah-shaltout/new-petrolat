export const motionConfig = {
    fadeIn: {
        initial: {
            opacity: 0,
        },
        active: {
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 22,
                mass: 0.5,
            },
        },
    },

    enterTop: {
        initial: {
            opacity: 0,
            y: -60,
        },
        active: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 90,
                damping: 20,
                mass: 0.6,
            },
        },
    },
    enterBottom: {
        initial: {
            opacity: 0,
            y: 60,
            scale: 0.97,
        },
        active: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 90,
                damping: 20,
                mass: 0.6,
            },
        },
    },
    enterStart: {
        initial: {
            opacity: 0,
            x: 60,
            scale: 0.97,
        },
        active: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 90,
                damping: 20,
                mass: 0.6,
            },
        },
    },
    enterEnd: {
        initial: {
            opacity: 0,
            x: -60,
            scale: 0.97,
        },
        active: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 90,
                damping: 20,
                mass: 0.6,
            },
        },
    },

    // 1. Luxury Scale & Blur - Perfect for hero sections and premium content
    luxuryReveal: {
        initial: {
            opacity: 0,
            scale: 0.92,
            filter: "blur(10px)",
        },
        active: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1], // Premium easing curve
            },
        },
    },

    // 2. Magnetic Rise - Elegant upward motion with rotation
    magneticRise: {
        initial: {
            opacity: 0,
            y: 80,
            scale: 0.9,
            rotateX: 15,
        },
        active: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 18,
                mass: 0.8,
            },
        },
    },

    // 3. Cinematic Slide - Wide entry with elastic bounce
    cinematicSlide: {
        initial: {
            opacity: 0,
            x: -100,
            scale: 0.85,
            rotateY: -15,
        },
        active: {
            opacity: 1,
            x: 0,
            scale: 1,
            rotateY: 0,
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 15,
                mass: 1,
            },
        },
    },

    // 4. Glide & Glow - Smooth with subtle scale for cards/features
    glideGlow: {
        initial: {
            opacity: 0,
            y: 40,
            scale: 0.95,
            filter: "brightness(0.8)",
        },
        active: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "brightness(1)",
            transition: {
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    },
} as const;
