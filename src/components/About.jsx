import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });

        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
        });
    });

    return (
        <div id="about" className="min-h-screen w-screen">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <p className="font-general text-sm uppercase md:text-[15px]">
                    Welcome to Pixel Junkie creative studio
                </p>

               <AnimatedTitle
                    title="W<b>h</b>y C<b>h</b>oose Pix<b>e</b>l Ju<b>n</b>kie?"
                    containerClass="mt-5 !text-black text-center"
                />

                <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
                    <p className="text-[15px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>We Create Market Leaders</strong>: Not just brands. Not just businesses. We craft legends.
                    </p>
                    <p className="text-[15px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>All-in-One Growth Powerhouse</strong>: Branding, marketing, web, design, development—we master it all.
                    </p>
                    <p className="text-[15px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>Innovation at Its Core</strong>: We don’t follow trends—we define them.
                    </p>
                    <p className="text-[15px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>Precision Meets Passion</strong>: Every project is executed with relentless excellence.
                    </p>
                    <p className="text-[15px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>Global Impact, Local Expertise</strong>: From disruptive startups to industry giants, we fuel businesses of every scale.
                    </p>
                </div>

            </div>

            <div className="h-dvh w-screen" id="clip">
                <div className="mask-clip-path about-image">
                    <img
                        src="img/about.webp"
                        alt="Background"
                        className="absolute left-0 top-0 size-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
