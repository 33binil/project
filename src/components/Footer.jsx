import { FaMailBulk, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
    { href: "mailto:business@pixeljunkiestudio.in?subject=Inquiry%20from%20Pixel%20Junkie%20Website&body=Hi%20Pixel%20Junkie%20Team,%0A%0AI%20just%20came%20across%20your%20website%20and%20was%20really%20impressed!%20I’d%20love%20to%20learn%20more%20about%20your%20services%20and%20how%20you%20can%20help%20with%20my%20branding,%20design,%20or%20digital%20marketing%20needs.%0A%0ALooking%20forward%20to%20your%20response!%0A%0ABest,%0A%5BYour%20Name%5D%0A%5BYour%20Contact%20Information%5D%20(Optional)",
        icon: <FaMailBulk className="text-white" />  },
    { href: "https://www.instagram.com/pixeljunkiestudio.in?igsh=bmtvZmI3cWdqZzE2", icon: <FaInstagram className="text-white" /> },
    { href: "https://wa.me/+918921318291?text=Hey Pixel Junkie Team! I just visited your website and loved what I saw. I’d love to discuss how you can help with my branding, design, or digital marketing needs. Let’s chat!", icon: <FaWhatsapp className="text-white" /> },
];

const Footer = () => {
    return (
        <footer className="w-screen bg-[#000080] py-4 text-white">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-sm font-light md:text-left">
                    ©Pixel Junkie Creative Studio. All rights reserved
                </p>

                <div className="flex justify-center gap-4 md:justify-start">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors duration-500 ease-in-out hover:text-gray-300"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                <a
                    href="#privacy-policy"
                    className="text-center text-sm font-light hover:underline md:text-right"
                >
                    Privacy Policy
                </a>
            </div>
        </footer>
    );
};

export default Footer;
