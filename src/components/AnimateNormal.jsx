import { useRef } from "react";
import clsx from "clsx";
import Animate from "./Animate"; // Importing the animation component

const AnimatedTitle = ({ title, containerClass, fontSize = "32px", mdFontSize = "80px" }) => {
    const containerRef = useRef(null);

    return (
        <Animate animation="fade-up" duration={1.2} delay={0.2}>
            <div ref={containerRef} className={clsx("animated-title", containerClass)}>
                {title.split("<br />").map((line, index) => (
                    <div
                        key={index}
                        className="flex-center max-w-full flex-wrap gap-2 px-5 md:gap-3 font-extrabold text-white"
                        style={{
                            fontSize: fontSize, // Default for small screens
                        }}
                    >
                        {line.split(" ").map((word, idx) => (
                            <span
                                key={idx}
                                className="text-white responsive-font"
                            >
                                {word}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </Animate>
    );
};

export default AnimatedTitle;
