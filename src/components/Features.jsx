import { useEffect, useRef } from "react";
import gsap from "gsap";

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
                <h1 className="bento-title">{title}</h1>

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
            title: (
                <h2 className="text-[55px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl font-bold">
                    Branding & Identity
                </h2>
            ),
            description: (
                <div className="flex flex-col items-start justify-center h-full text-left space-y-6 lg:mt-20 xl:mt-12">
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
                        <strong>- Unforgettable Logos & Brand Strategy</strong>
                    </p>
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
                        <strong>- Visual Identity & Market Positioning</strong>
                    </p>
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
                        <strong>- Corporate & Product Branding</strong>
                    </p>
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-2xl xl:text-2xl">
                        <strong>- Packaging & Merchandise Design</strong>
                    </p>
                </div>

            ),
        },

        {
            src: "/videos/feature-3.mp4",
            title: (
                <h2 className="text-[55px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl font-bold">
                    Web Design & Development
                </h2>
            ),
            description:
                <div className="flex flex-col items-start justify-center h-full text-left space-y-6 lg:mt-20 xl:mt-12">
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>- High-Performance Websites & eCommerce</strong>
                    </p>
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>- UI/UX & Interactive Web Experiences</strong>
                    </p>
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>- No-Code & Custom Development</strong>
                    </p>
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>- Website Maintenance & Optimization</strong>
                    </p>
                </div>
        },
        {
            src: "/videos/feature-5.mp4",
            title: (
                <h2 className="text-[55px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl font-bold">
                    Digital Marketing & Strategy
                </h2>
            ),
            description:
                <div className="flex flex-col items-start justify-center h-full text-left space-y-6 lg:mt-20 xl:mt-12">
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>- Social Media Domination & Growth Hacking</strong>
                    </p>
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>- High-Conversion Ads (Google, Meta, LinkedIn, TikTok)</strong>
                    </p>
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>- SEO & Content Marketing that Delivers</strong>
                    </p>
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>- Email & Influencer Marketing That Sells</strong>
                    </p>
                </div>
        },
        {
            src: "/videos/feature-6.mp4",
            title: (
                <h2 className="text-[55px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl font-bold">
                    App Development
                </h2>
            ),
            description:
                <div className="flex flex-col items-start justify-center h-full text-left space-y-6 lg:mt-20 xl:mt-12">
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>- iOS & Android Mobile App Development</strong>
                    </p>
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>- Cross-Platform & Native Applications</strong>
                    </p>
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>- SaaS & AI-Powered Business Tools</strong>
                    </p>
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>- AR, VR & Metaverse Development</strong>
                    </p>
                </div>
        },
        {
            src: "/videos/feature-2.mp4",
            title: (
                <h2 className="text-[55px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl font-bold">
                    Video Production & Motion Graphics
                </h2>
            ),
            description:
                <div className="flex flex-col items-start justify-center h-full text-left space-y-6 lg:mt-20 xl:mt-12">
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>- High-End Commercials & Brand Films</strong>
                    </p>
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>- Motion Graphics & Animated Explainers</strong>
                    </p>
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>- Social Media Video Content & Ads</strong>
                    </p>
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>- 3D Animation & Visual Effects (VFX)</strong>
                    </p>
                </div>
        },
        {
            src: "/videos/feature-4.mp4",
            title: (
                <h2 className="text-[55px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl font-bold">
                    Business Consulting & Scaling Solutions
                </h2>
            ),
            description:
                <div className="flex flex-col items-start justify-center h-full text-left space-y-6 lg:mt-20 xl:mt-12">
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>- Startup & Growth Acceleration Strategies</strong>
                    </p>
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>- Investor Pitch Decks & Business Plans</strong>
                    </p>
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>- Franchise & Expansion Mastery</strong>
                    </p>
                    <p className="text-[14px] sm:text-lg md:text-xl lg:text-xl xl:text-xl">
                        <strong>- B2B & B2C Market Domination Strategies</strong>
                    </p>
                </div>
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
