import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedText = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-100px", once: false });

    const texts = [
        { text: "The Pixel Junkie Story – Built for Visionaries, By Visionaries.", direction: "-100vw" },
        { text: "We are not just another agency—we are the driving force behind businesses that refuse to settle.", direction: "100vw" },
        { text: "Born from the fire of entrepreneurial ambition.", direction: "-100vw" },
        { text: "we understand the grind, the hustle, and the breakthroughs it takes to build something that lasts.", direction: "100vw" },
        { text: "Our clients don’t come to us for just another campaign—they come to dominate their industry.", direction: "-100vw" },
        { text: "Mediocrity is not an option. Excellence is our only standard.", direction: "100vw" },
    ];

    return (
        <div ref={ref} className="flex flex-col items-center justify-center min-h-screen space-y-10 px-6 text-center bg-black text-white">
            {texts.map((item, index) => (
                <motion.p
                    key={index}
                    initial={{ x: item.direction, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: item.direction, opacity: 0 }}
                    transition={{
                        duration: isInView ? 0.8 : 0.5,
                        ease: "easeInOut",
                        delay: index * 0.2,
                    }}
                    className={`max-w-4xl leading-tight ${
                        index === 0 ? "text-4xl md:text-6xl font-bold" : "text-1xl md:text-3xl"
                    }`}
                >
                    {item.text}
                </motion.p>
            ))}
        </div>
    );
};

export default AnimatedText;
