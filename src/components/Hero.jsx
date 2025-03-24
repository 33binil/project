import Animate from "./Animate.jsx";
import AnimatedTitle from "./AnimatedTitle.jsx";
import AnimateNormal from "./AnimateNormal.jsx";

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
                            <AnimateNormal
                                title="PIXEL JUNKIE CREATIVE STUDIO"
                                containerClass="text-center mt max-w mx-auto text-2xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-5xl"
                            />
                        </div>

                        {/* Sub Title (Bottom of Page) */}
                        <div className="absolute bottom-10 left-0 w-full flex justify-center">
                            <AnimateNormal
                                title="BUILD BY ENTERPRENEURS, FOR ENTERPRENEURS – MADE IN GRMANY, TRANSFORMING BUSSINESS WORLDWIDE"
                                containerClass="text-center mt-3 max-w mx-auto text-[14px] sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl"
                            />
                        </div>

                        <Animate animation="fade-up" duration={1.5}><br />
                            <p className="mb-5 max-w mx-auto text-center font-robert-regular text-[13px] sm:text-sm md:text-lg lg:text-[18px] xl:text-xl text-blue-100">
                                Forget average. Forget ordinary. Pixel Junkie Creative Studios isn’t just another creative agency<br/>we are the architects of industry dominance.<br/> Whether you're launching a bold new startup or scaling a multinational empire, we don’t just build brands—we engineer success.
                            </p>
                        </Animate>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;