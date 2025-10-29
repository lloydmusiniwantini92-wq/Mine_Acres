import { motion } from "framer-motion";

export default function Card({ title, children }) {
    return (
        <motion.div
            className="card mb-6 border border-gray-800 hover:border-[var(--accent)] hover:shadow-[0_0_25px_rgba(0,224,184,0.25)] transition-all duration-300"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
        >
            {title && (
                <h2 className="text-lg font-plex text-[var(--accent-secondary)] mb-3 tracking-wide">
                    {title}
                </h2>
            )}
            <div className="text-gray-300">{children}</div>
        </motion.div>
    );
}
