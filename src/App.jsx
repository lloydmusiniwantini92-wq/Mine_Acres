import { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useLocation,
    useNavigate,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Operations from "./pages/Operations";
import Performance from "./pages/Performance";
import FinanceSustain from "./pages/FinanceSustain";
import SmartMine from "./pages/SmartMine";
import AdminPanel from "./pages/AdminPanel";
import ProtectedRoute from "./auth/ProtectedRoute";
import { useAuth } from "./auth/AuthContext";

// ✅ Route handler (animates transitions)
function AnimatedRoutes() {
    const location = useLocation();
    const { user } = useAuth();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                {!user ? (
                    <Route path="*" element={<Login />} />
                ) : (
                    <>
                        <Route
                            path="/"
                            element={
                                <ProtectedRoute>
                                    <Operations />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/performance"
                            element={
                                <ProtectedRoute>
                                    <Performance />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/finance"
                            element={
                                <ProtectedRoute>
                                    <FinanceSustain />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/smartmine"
                            element={
                                <ProtectedRoute>
                                    <SmartMine />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/admin"
                            element={
                                <ProtectedRoute requiredRole="admin">
                                    <AdminPanel />
                                </ProtectedRoute>
                            }
                        />
                        <Route path="*" element={<Navigate to="/" />} />
                    </>
                )}
            </Routes>
        </AnimatePresence>
    );
}

// ✅ Outer App with splash → login → dashboard transition
function AppContent() {
    const { user } = useAuth();
    const [booting, setBooting] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setBooting(false), 2200);
        return () => clearTimeout(timer);
    }, []);

    // Splash screen while initializing
    if (booting) {
        return (
            <motion.div
                className="flex flex-col items-center justify-center h-screen bg-[var(--bg-dark)] text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className="text-4xl font-[Montserrat] font-extrabold text-[var(--accent)] tracking-widest mb-6"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    Initializing Dashboard Systems…
                </motion.h1>

                {/* animated loading line */}
                <motion.div
                    className="w-64 h-[4px] bg-gray-800 overflow-hidden rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                >
                    <motion.div
                        className="h-full bg-[var(--accent)]"
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{
                            repeat: Infinity,
                            repeatDelay: 0.2,
                            duration: 1.5,
                            ease: "easeInOut",
                        }}
                    />
                </motion.div>
            </motion.div>
        );
    }

    return (
        <>
            {user && <Navbar />}
            <AnimatedRoutes />
        </>
    );
}

export default function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}
