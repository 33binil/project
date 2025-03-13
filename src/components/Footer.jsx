import { FaDiscord, FaTwitter, FaYoutube, FaMedium, FaMailBulk, FaInstagram, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
    { href: "https://discord.com", icon: <FaMailBulk className="text-white" /> },
    { href: "https://instagram.com", icon: <FaInstagram className="text-white" /> },
    { href: "https://whatsapp.com", icon: <FaWhatsapp className="text-white" /> },
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
