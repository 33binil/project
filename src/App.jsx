import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Brands from "./components/Brands";
import Storys from "./components/Storys";
import Statement from "./components/Statement";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000); // Loader duration
        return () => clearTimeout(timer); // Cleanup function
    }, []);

    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            {loading ? (
                <Loader /> // Show loader only on first load
            ) : (
                <>
                    <NavBar />
                    <Hero />
                    <About />
                    <Features />
                    <Brands />
                    <Storys />
                    <Story />
                    <Statement />
                    <Contact />
                    <Footer />
                </>
            )}
        </main>
    );
}

export default App;