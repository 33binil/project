import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import clsx from "clsx";

const Animate = ({ children, animation = "fade-up", duration = 1.2, delay = 0, className = "" }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        gsap.fromTo(
            containerRef.current,
            getAnimationStart(animation),
            {
                ...getAnimationEnd(animation),
                duration,
                delay,
                ease: "power2.out",
            }
        );
    }, [animation, duration, delay]);

    return (
        <div ref={containerRef} className={clsx("animate", className)}>
            {children}
        </div>
    );
};

const getAnimationStart = (type) => {
    switch (type) {
        case "fade-in":
            return { opacity: 0 };
        case "fade-up":
            return { opacity: 0, y: 40 };
        case "fade-down":
            return { opacity: 0, y: -40 };
        case "zoom-in":
            return { opacity: 0, scale: 0.8 };
        default:
            return { opacity: 0 };
    }
};

const getAnimationEnd = (type) => {
    switch (type) {
        case "fade-in":
        case "fade-up":
        case "fade-down":
            return { opacity: 1, y: 0 };
        case "zoom-in":
            return { opacity: 1, scale: 1 };
        default:
            return { opacity: 1 };
    }
};

export default Animate;
