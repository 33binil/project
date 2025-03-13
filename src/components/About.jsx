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
                    title="empoweri<b>n</b>g st<b>a</b>rtups, ele<b>v</b>ating br<b>a</b>nds"
                    containerClass="mt-5 !text-black text-center"
                />

                <div className="about-subtext ">
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">Turn your Vision into Reality--The Ultimate Startup Quest Begins.</p>
                    <p className="text-gray-500 text-[14px] sm:text-lg md:text-xl lg:text-xl xl:text-xl" >
                        Pixel Junkie Creative Studio--Empoweing Startups, Elevating Brands, and Crafting Digital Excellence.
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
