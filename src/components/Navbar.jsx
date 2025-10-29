import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const [open, setOpen] = useState(false);

    if (location.pathname === "/login") return null;

    const navLinks = [
        { path: "/", label: "Operations" },
        { path: "/performance", label: "Performance" },
        { path: "/finance", label: "Finance & Sustain" },
        { path: "/smartmine", label: "Smart Mine" },
        ...(user?.role === "admin" ? [{ path: "/admin", label: "Admin" }] : []),
    ];

    const linkVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.15 * i, duration: 0.5, ease: "easeOut" },
        }),
    };

    return (
        <>
            {/* 🔹 Top bar */}
            <motion.nav
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-[var(--card-dark)] border-b border-gray-800 px-6 py-4 shadow-md"
            >
                <h1
                    className="text-2xl font-bold text-[var(--accent)] tracking-wide cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    Comedy Mine
                </h1>

                <div className="flex items-center gap-3">
                    {/* username only in closed state */}
                    <span className="hidden sm:block text-gray-400 text-sm">
                        Hi, {user?.username}
                    </span>
                    <button
                        onClick={() => setOpen(true)}
                        className="text-[var(--accent)] hover:scale-110 transition"
                        aria-label="Open menu"
                    >
                        <Menu size={30} />
                    </button>
                </div>
            </motion.nav>

            {/* 🔸 Overlay Menu */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Background dim */}
                        <motion.div
                            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                        />

                        {/* Slide-in panel */}
                        <motion.aside
                            className="fixed inset-0 z-50 flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[var(--card-dark)] via-[#111115] to-[#0a0a0b]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-6 right-8 text-gray-400 hover:text-[var(--accent)]"
                            >
                                <X size={36} />
                            </button>

                            {/* Cascading menu items */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                className="flex flex-col gap-6 font-[Montserrat] text-4xl md:text-6xl tracking-wide select-none text-gray-200"
                            >
                                {navLinks.map((link, i) => {
                                    const active = location.pathname === link.path;
                                    return (
                                        <motion.div
                                            key={link.path}
                                            custom={i}
                                            variants={linkVariant}
                                            className="relative group"
                                        >
                                            <Link
                                                to={link.path}
                                                onClick={() => setOpen(false)}
                                                className={`${active
                                                        ? "text-[var(--accent-secondary)]"
                                                        : "hover:text-[var(--accent)]"
                                                    } transition`}
                                            >
                                                {link.label}
                                            </Link>

                                            {/* Cross-out line animation for active page */}
                                            {active && (
                                                <motion.span
                                                    layoutId="underline"
                                                    className="absolute left-0 right-0 top-1/2 h-[2px] bg-[var(--accent-secondary)] origin-left"
                                                    initial={{ scaleX: 0 }}
                                                    animate={{ scaleX: 1 }}
                                                    transition={{ duration: 0.5 }}
                                                />
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </motion.div>

                            {/* Bottom mist fade */}
                            <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-t from-black via-transparent opacity-60" />

                            {/* Logout button only */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 }}
                                className="absolute bottom-10"
                            >
                                <button
                                    onClick={() => {
                                        logout();
                                        navigate("/login");
                                    }}
                                    className="btn btn-secondary text-black font-semibold px-6 py-2 text-lg"
                                >
                                    Logout
                                </button>
                            </motion.div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
