import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
    const [username, setUsername] = useState("");
    const [role, setRole] = useState("worker");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username.trim()) return;
        setLoading(true);
        setTimeout(() => {
            login(username, role);
            navigate("/");
        }, 1500);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center min-h-screen overflow-hidden"
        >
            {/* 🪨 Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/mine_acres.png')",
                }}
            />

            {/* 💠 Stylized login form */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative max-w-sm w-full text-center p-8 shadow-2xl"
                style={{
                    background: "rgba(20, 22, 27, 0.45)",
                    backdropFilter: "blur(14px)",
                    clipPath:
                        "polygon(10px 0%, calc(100% - 10px) 0%, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0% calc(100% - 10px), 0% 10px)",
                    boxShadow:
                        "0 0 25px rgba(0, 224, 184, 0.25), inset 0 0 8px rgba(0, 224, 184, 0.1)",
                }}
            >
                <h1
                    className="text-4xl font-[Montserrat] font-extrabold text-[var(--accent)] mb-6 tracking-wider uppercase"
                    style={{
                        letterSpacing: "2px",
                        textShadow: "0 0 12px rgba(0, 224, 184, 0.3)",
                    }}
                >
                    Mine Acres
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Username input */}
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full bg-[rgba(25,25,30,0.6)] rounded-none px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] shadow-inner placeholder-gray-400 transition-all duration-300"
                        style={{
                            clipPath:
                                "polygon(6px 0%, calc(100% - 6px) 0%, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0% calc(100% - 6px), 0% 6px)",
                            border: "none",
                        }}
                        required
                    />

                    {/* Role select */}
                    <select
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="w-full bg-[rgba(25,25,30,0.6)] rounded-none px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] shadow-inner transition-all duration-300"
                        style={{
                            clipPath:
                                "polygon(6px 0%, calc(100% - 6px) 0%, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0% calc(100% - 6px), 0% 6px)",
                            border: "none",
                        }}
                    >
                        <option value="admin">Admin</option>
                        <option value="supervisor">Supervisor</option>
                        <option value="worker">Worker</option>
                    </select>

                    {/* Submit button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[var(--accent)] text-black font-semibold py-2 transition hover:opacity-90 shadow-[0_0_15px_rgba(0,224,184,0.4)]"
                        style={{
                            clipPath:
                                "polygon(6px 0%, calc(100% - 6px) 0%, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0% calc(100% - 6px), 0% 6px)",
                        }}
                    >
                        {loading ? "Loading Systems …" : "Enter Dashboard"}
                    </button>
                </form>

                <p className="mt-6 text-sm text-gray-300/80 tracking-wide uppercase">
                    Authorized Mine Acres Personnel Only
                </p>
            </motion.div>
        </motion.div>
    );
}
