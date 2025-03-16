import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
        <img src={src} />
    </div>
);

const Contact = () => {
    return (
        <div id="contact" className="my-20 min-h-96 w-screen  px-10">
            <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
                <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
                    <ImageClipBox
                        src="/img/contact-1.webp"
                        clipClass="contact-clip-path-1"
                    />
                    <ImageClipBox
                        src="/img/contact-2.webp"
                        clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
                    />
                </div>



                <div className="flex flex-col items-center text-center">
                    <AnimatedTitle
                        title="Have an idea? A business? A vision? We turn ambitions into empires."
                        className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
                    />

                    <p className="mb-4 mt-20 font-general text-[12px] uppercase">
                        Fill out the form below and let’s create something legendary.
                    </p>

                    <Button title="Get in Touch" containerClass="mt-10 cursor-pointer" />
                </div>

            </div>
        </div>
    );
};

export default Contact;
