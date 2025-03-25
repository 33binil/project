import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function CompanyStatement() {
    const controls = useAnimation();
    const headingControls = useAnimation();


    const { ref: headingRef, inView: headingInView } = useInView({ triggerOnce: false, threshold: 0.2 });
    const { ref: contentRef, inView: contentInView } = useInView({ triggerOnce: false, threshold: 0.2 });

    useEffect(() => {
        if (headingInView) {
            headingControls.start("visible");
        } else {
            headingControls.start("hidden");
        }
    }, [headingInView, headingControls]);

    useEffect(() => {
        if (contentInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [contentInView, controls]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-blue-50 text-black">
            <div ref={headingRef} className="relative flex flex-col items-center justify-center w-full mb-16 overflow-hidden">
                <motion.h1
                    initial="hidden"
                    animate={headingControls}
                    variants={{
                        hidden: { y: -50, opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 1 } },
                    }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center"
                >
                    Our Mission & Vision
                </motion.h1>

                <motion.h1
                    initial="hidden"
                    animate={headingControls}
                    variants={{
                        hidden: { y: 50, opacity: 0 },
                        visible: { y: 0, opacity: 1, transition: { duration: 1 } },
                    }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mt-2"
                >
                    Transforming Industries with Creativity and Innovation
                </motion.h1>
            </div>

            <motion.div
                ref={contentRef}
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
                }}
                className="max-w-4xl text-center mb-12"
            >
                <motion.h2 className="text-2xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-4xl font-semibold">Mission Statement</motion.h2>
                <motion.p className="mt-4 text-lg text-black">
                    To redefine the creative industry by delivering branding, marketing, and digital solutions that don’t just stand out—they take over. We empower businesses with strategy, execution, and innovation that guarantee success.
                </motion.p>
            </motion.div>

            <motion.div
                ref={contentRef}
                initial="hidden"
                animate={controls}
                variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
                }}
                className="max-w-4xl text-center"
            >
                <motion.h2 className="text-3xl font-semibold">Vision Statement</motion.h2>
                <motion.p className="mt-4 text-lg text-black">
                    To be the global force behind the next generation of entrepreneurs and enterprises, transforming industries with creativity, technology, and unstoppable execution.
                </motion.p>
            </motion.div>
        </div>
    );
}
