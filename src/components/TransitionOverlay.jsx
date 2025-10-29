import { motion, AnimatePresence } from "framer-motion";

export default function TransitionOverlay({ isActive }) {
    return (
        <AnimatePresence>
            {isActive && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="fixed inset-0 z-50 bg-[var(--bg-dark)] flex items-center justify-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl font-bold text-[var(--accent)] tracking-widest mb-3">
                            COMEDY MINE
                        </h1>
                        <p className="text-gray-400 text-sm uppercase tracking-[0.3em]">
                            Initializing Dashboard Systems …
                        </p>
                    </motion.div>
                    <motion.div
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-0 bg-[var(--accent)] blur-[120px] opacity-20"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
