import { useEffect, useRef } from "react";

const logos = [
    "/img/1.png", "/img/2.png", "/img/3.png", "/img/4.png", "/img/5.png",
    "/img/6.png", "/img/7.png", "/img/8.png", "/img/9.png", "/img/10.png",
    "/img/11.png", "/img/12.png", "/img/13.png", "/img/14.png", "/img/15.png",
    "/img/16.png", "/img/17.png",
];

const BrandsSlider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let animation;

        const startScrolling = () => {
            slider.style.animation = "scroll 25s linear infinite";
        };

        startScrolling();
        return () => cancelAnimationFrame(animation);
    }, []);

    return (
        <div className="relative text-black bg-gray-700 py-10">
            <div className="relative text-center mb-20">
                <h2 className="text-[28px] sm:text-[22px] md:text-[30px] lg:text-[38px] text-blue-50 font-bold mb-4">The Brands That Trust Us</h2>
                <p className="text-[15px] sm:text-[18px] md:text-[22px] lg:text-[20px] text-blue-50 mt-2 mb-6 max-w-2xl mx-auto">
                    Showcase of industry leaders, emerging disruptors, and innovative startups that chose us to elevate their brand.
                </p>
            </div>
            <div className="overflow-hidden whitespace-nowrap relative w-full">
                <div className="flex gap-10" ref={sliderRef} style={{ animation: "scroll 25s linear infinite" }}>
                    {[...logos, ...logos].map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt="Brand Logo"
                            className="h-24 w-auto object-contain opacity-80 hover:opacity-100 transition"
                        />
                    ))}
                </div>
            </div>
            <style>
                {`
          @keyframes scroll {
            from {
              transform: translateX(0%);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
            </style>
        </div>
    );
};

export default BrandsSlider;
