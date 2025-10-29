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
        { path: "/", label: "Dashboard" },
        { path: "/operations", label: "Operations" },
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
            <motion.nav
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-[#0a0b0d]/90 border-b border-gray-800 px-6 py-4 backdrop-blur-md"
            >
                <h1
                    className="text-3xl font-[Montserrat] font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#00ffa6] to-[#009bff] text-transparent bg-clip-text cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    Mine Acres
                </h1>

                <div className="flex items-center gap-3">
                    <span className="hidden sm:block text-gray-400 text-sm">
                        {user?.username && `Hi, ${user.username}`}
                    </span>
                    <button
                        onClick={() => setOpen(true)}
                        className="text-[#00ffa6] hover:scale-110 transition"
                        aria-label="Open menu"
                    >
                        <Menu size={30} />
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                        />

                        <motion.aside
                            className="fixed inset-0 z-50 flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[#0d0f10] via-[#0a0b0d] to-[#050505]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-6 right-8 text-gray-400 hover:text-[#00ffa6]"
                            >
                                <X size={36} />
                            </button>

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
                                                    ? "text-[#00ffa6]"
                                                    : "hover:text-[#00d4ff]"
                                                    } transition`}
                                            >
                                                {link.label}
                                            </Link>

                                            {active && (
                                                <motion.span
                                                    layoutId="underline"
                                                    className="absolute left-0 right-0 top-1/2 h-[2px] bg-[#00ffa6] origin-left"
                                                    initial={{ scaleX: 0 }}
                                                    animate={{ scaleX: 1 }}
                                                    transition={{ duration: 0.5 }}
                                                />
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </motion.div>

                            <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none bg-gradient-to-t from-black via-transparent opacity-70" />

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
                                    className="bg-[#00ffa6] text-black font-semibold px-8 py-3 rounded-none uppercase tracking-wider hover:bg-[#00d4ff] transition-all"
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
