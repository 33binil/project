import gsap from "gsap";
import { useRef } from "react";

import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
    const frameRef = useRef(null);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if (!element) return;

        const rect = element.getBoundingClientRect();
        const xPos = clientX - rect.left;
        const yPos = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((yPos - centerY) / centerY) * -10;
        const rotateY = ((xPos - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX,
            rotateY,
            transformPerspective: 500,
            ease: "power1.inOut",
        });
    };

    const handleMouseLeave = () => {
        const element = frameRef.current;

        if (element) {
            gsap.to(element, {
                duration: 0.3,
                rotateX: 0,
                rotateY: 0,
                ease: "power1.inOut",
            });
        }
    };

    return (
        <div id="story" className="min-h-dvh w-screen bg-black text-blue-50 flex flex-col items-center justify-center">

            <AnimatedTitle
                title="L<b>e</b>t’s Build Somet<b>h</b>ing Legend<b>a</b>ry"
                containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
            />


            <div className="relative mt-10 w-[90vw] max-w-[800px] h-[50vw] max-h-[450px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-lg overflow-hidden">
                <video
                    ref={frameRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseLeave}
                    onMouseEnter={handleMouseLeave}
                    src="/videos/entrance.mp4"
                    loop
                    muted
                    autoPlay
                    className="w-full h-full object-cover"
                />
            </div>


            <div className="mt-5 max-w text-center font-circular-web text-violet-50 text-[16px] sm:text-[18px] md:text-[22px] lg:text-[28px]">
                <p>Enquiries & Collaborations</p>
                <p>Your competitors are already behind.</p>
                <p>Don’t wait.</p>
                <p>Ready to Level Up?</p>
            </div>
        </div>
    );
};

export default FloatingImage;
