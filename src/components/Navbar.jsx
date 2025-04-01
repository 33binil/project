import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";

const navItems = ["Features", "About", "Contact"];

const NavBar = () => {
    const navContainerRef = useRef(null);
    const { y: currentScrollY } = useWindowScroll();
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        if (currentScrollY === 0) {
            setIsNavVisible(true);
            navContainerRef.current.classList.remove("floating-nav");
        } else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false);
            navContainerRef.current.classList.add("floating-nav");
        } else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true);
            navContainerRef.current.classList.add("floating-nav");
        }
        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    const handleScrollToSection = (id) => (e) => {
        e.preventDefault();
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div
            ref={navContainerRef}
            className="hidden sm:block fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
        >
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center justify-between p-4">
                    <div className="flex items-center gap-7">
                        <img src="/img/logo.png" alt="logo" className="w-10" />
                    </div>

                    <div className="flex h-full items-center">
                        <div className="hidden md:block">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={`#${item.toLowerCase()}`}
                                    className="nav-hover-btn"
                                    onClick={handleScrollToSection(item.toLowerCase())} // ✅ Smooth Scroll
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default NavBar;