import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = ({ onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete(); // Call function to hide the loader
        }, 2000); // Adjust time (in milliseconds) as needed

        return () => clearTimeout(timer); // Cleanup timeout
    }, [onComplete]);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
            {/* Logo Animation */}
            <motion.img
                src="img/logo.png" // Ensure the logo path is correct
                alt="Loading Logo"
                className="w-52 h-52"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            />

            {/* Three Circles Loading Animation with Custom Colors */}
            <div className="mt-4 flex space-x-2">
                {["#FF0000", "#FFFFFF", "#0000FF"].map((color, i) => (
                    <motion.div
                        key={i}
                        className="w-5 h-5 rounded-full"
                        style={{ backgroundColor: color }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

const App = () => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="bg-black min-h-screen flex items-center justify-center text-white">
            {loading ? (
                <Loader onComplete={() => setLoading(false)} />
            ) : (
                <div className="text-white text-center">
                    <h1 className="text-6xl">Welcome to the Pixel Junkie Creative Studio!</h1>
                </div>
            )}
        </div>
    );
};

export default App;
