import Animate from "./Animate.jsx";
import Loader from "./Loader";
import AnimatedTitle from "./AnimatedTitle.jsx";

const Hero = () => {
    const getVideoSrc = () => `/videos/hero-1.mp4`;

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                {/* Black overlay with opacity */}
                <div className="absolute inset-0 bg-black opacity-45 z-20"></div>

                {/* Background Video */}
                <video
                    src={getVideoSrc()}
                    autoPlay
                    loop
                    muted
                    className="absolute left-0 top-0 size-full object-cover object-center"
                />

                {/* Content Layer */}
                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className="mt-28 px-5 sm:px-10">
                        {/* Main Title */}
                        <div className="w-full flex justify-center">
                            <AnimatedTitle
                                title="PI<b>X</b>EL JU<b>N</b>KIE crea<b>t</b>ive STU<b>D</b>IO"
                                containerClass="text-center mt max-w mx-auto text-[14px] sm:text-4xl md:text-4xl lg:text-6xl xl:text-8xl"
                            />
                        </div>



                        {/* Sub Title (Bottom of Page) */}
                        <div className="absolute bottom-10 left-0 w-full flex justify-center">
                            <AnimatedTitle
                                title="sta<b>r</b>tup Sol<b>u</b>tions"
                                containerClass="text-center mt-3 max-w mx-auto text-[14px] sm:text-4xl md:text-4xl lg:text-6xl xl:text-8xl"
                            />
                        </div>

                        {/* Description */}
                        <Animate animation="fade-up" duration={1.5}>
                            <p className="mb-5 max-w mx-auto text-center font-robert-regular text-[13px] sm:text-sm md:text-lg lg:text-[18px] xl:text-xl text-blue-100">
                                At Pixel Junkie Creative Studios, we’re on a mission to help businesses like yours grow, thrive, and make a lasting impact.<br />
                                With our expertise in branding, graphic design, digital marketing, and web development, we’re here to turn your vision into reality.<br />
                                Every project is an opportunity to learn, create, and evolve, and we’re committed to taking your brand to the next level as we grow together...
                            </p>
                        </Animate>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
