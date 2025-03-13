import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const BentoTilt = ({ children, className = "" }) => {
    return (
        <div className={`relative overflow-hidden rounded-lg ${className}`}>
            {children}
        </div>
    );
};

export const BentoCard = ({ src, title, description }) => (
    <div className="relative w-full h-full bg-black">
        <video
            src={src}
            loop
            muted
            autoPlay
            className="absolute left-0 top-0 w-full h-full object-cover object-center rounded-xl"
        />

        <div className="absolute left-0 top-0 size-full bg-black opacity-60"></div>

        <div className="relative z-10 flex h-full flex-col justify-between p-5 text-white">
            <div className="mt-20">
                {/* ✅ Title */}
                <h1 className="bento-title">{title}</h1>

                {/* ✅ Description */}
                {description && (
                    <p className="mt-3 max-w-6xl text-[14px] sm:text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px] leading-relaxed">
                        {description}
                    </p>
                )}
            </div>
        </div>
    </div>
);

const Features = () => {
    const containerRef = useRef(null);
    const features = [
        {
            src: "/videos/feature-1.mp4",
            title: "Brand Identity",
            description:
                "Pixel Junkie Studio shapes powerful brand identities that leave a lasting impression. From logos to visual storytelling, we craft unique, cohesive designs that define your brand and connect with your audience.",
        },
        {
            src: "/videos/feature-2.mp4",
            title: "Social Media Video Production",
            description:
                "Pixel Junkie Studio creates compelling advertisements and engaging social media videos to elevate your brand’s online presence. From concept to execution, we craft visually stunning content that captures attention, boosts engagement, and drives business growth across all digital platforms.",
        },
        {
            src: "/videos/feature-3.mp4",
            title: "Website Development",
            description:
                "Pixel Junkie Studio specializes in crafting dynamic, user-friendly websites that elevate brands and drive success. From sleek designs to seamless functionality, we transform ideas into digital experiences that engage and inspire.",
        },
        {
            src: "/videos/feature-4.mp4",
            title: "Brand Activation / Strategy",
            description:
                "Pixel Junkie Studio transforms ideas into impactful brand experiences. Through strategic planning, innovative campaigns, and immersive activations, we connect your brand with the right audience, driving engagement and long-term loyalty.",
        },
        {
            src: "/videos/feature-5.mp4",
            title: "Digital Marketing",
            description:
                "Pixel Junkie Studio helps businesses grow with data-driven digital marketing strategies. From SEO and social media marketing to targeted ad campaigns, we optimize your brand’s online presence, ensuring maximum reach, engagement, and conversion.",
        },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            let sections = gsap.utils.toArray(".feature-item");

            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${window.innerWidth * (sections.length - 1)}`,
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                },
            });
        }, containerRef);

        return () => ctx.revert(); // Clean up GSAP context
    }, []);

    return (
        <section ref={containerRef} className="h-screen overflow-hidden bg-black">
            <div className="flex h-screen" style={{ width: `${features.length * 100}vw` }}>
                {features.map((feature, index) => (
                    <BentoTilt key={index} className="feature-item flex w-screen items-center justify-center">
                        <BentoCard {...feature} />
                    </BentoTilt>
                ))}
            </div>
        </section>
    );
};

export default Features;
