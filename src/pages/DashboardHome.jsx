import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DashboardHome() {
    const [data, setData] = useState({
        extraction: 65,
        fuel: 80,
        efficiency: 72,
        ai: 90,
        feed: [],
    });

    useEffect(() => {
        const feedLines = [
            "AI recalibrating drone sensors...",
            "System temperature stable.",
            "Predictive model: 97.3% accurate.",
            "Worker shift change logged.",
            "Autonomous haul units ready.",
        ];
        const interval = setInterval(() => {
            setData((prev) => ({
                ...prev,
                extraction: Math.floor(Math.random() * 20) + 80,
                fuel: Math.floor(Math.random() * 20) + 60,
                efficiency: Math.floor(Math.random() * 20) + 70,
                ai: Math.floor(Math.random() * 10) + 90,
                feed: [
                    ...prev.feed.slice(-4),
                    feedLines[Math.floor(Math.random() * feedLines.length)],
                ],
            }));
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const Gauge = ({ label, value }) => (
        <div className="flex flex-col items-center">
            <motion.div
                className="w-24 h-24 rounded-full border-4 border-[#00ffa6] flex items-center justify-center text-2xl font-bold text-[#00ffa6] shadow-[0_0_20px_rgba(0,255,166,0.4)]"
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            >
                {value}%
            </motion.div>
            <span className="mt-2 text-gray-300 text-sm uppercase tracking-wider">
                {label}
            </span>
        </div>
    );

    return (
        <div className="min-h-screen bg-[#030405] text-gray-200 flex flex-col items-center justify-center gap-12 px-6">
            <motion.h1
                className="text-5xl font-[Montserrat] font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#00ffa6] to-[#009bff] text-transparent bg-clip-text"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Mine Acres Control Center
            </motion.h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                <Gauge label="Ore Extraction" value={data.extraction} />
                <Gauge label="Fuel Level" value={data.fuel} />
                <Gauge label="Efficiency" value={data.efficiency} />
                <Gauge label="AI Confidence" value={data.ai} />
            </div>

            <motion.div
                className="w-full max-w-2xl bg-[#0a0b0d] p-6 mt-8 rounded-lg shadow-inner border border-[#00ffa6]/20 font-mono text-sm overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h3 className="text-[#00ffa6] mb-3 font-semibold tracking-widest">
                    System Feed
                </h3>
                <div className="space-y-2 text-gray-400 h-32 overflow-y-auto">
                    {data.feed.map((line, i) => (
                        <motion.p key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            ▸ {line}
                        </motion.p>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
