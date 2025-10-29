import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Login from "./pages/Login";
import Dashboard from "./pages/Operations";

export default function App() {
    const [initComplete, setInitComplete] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        const sequence = async () => {
            await new Promise((res) => setTimeout(res, 2000)); // 2s splash
            setInitComplete(true);
            await new Promise((res) => setTimeout(res, 800)); // fade delay
            setShowLogin(true);
        };
        sequence();
    }, []);

    return (
        <AnimatePresence mode="wait">
            {!initComplete ? (
                <motion.div
                    key="splash"
                    className="flex items-center justify-center h-screen bg-[#0e0f12]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h1
                        className="text-3xl md:text-5xl font-[Montserrat] text-[var(--accent)] tracking-widest"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                    >
                        Initializing Dashboard Systems…
                    </motion.h1>
                </motion.div>
            ) : showLogin ? (
                <motion.div
                    key="login"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <Login />
                </motion.div>
            ) : (
                <motion.div
                    key="transition"
                    className="flex items-center justify-center h-screen bg-[#0e0f12]"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
            )}
        </AnimatePresence>
    );
}
