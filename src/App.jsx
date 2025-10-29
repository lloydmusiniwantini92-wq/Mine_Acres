import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";
import ProtectedRoute from "./auth/ProtectedRoute";
import { AuthProvider, useAuth } from "./auth/AuthContext";
import TransitionOverlay from "./components/TransitionOverlay";

import Operations from "./pages/Operations";
import Performance from "./pages/Performance";
import FinanceSustain from "./pages/FinanceSustain";
import SmartMine from "./pages/SmartMine";

function AnimatedRoutes() {
    const location = useLocation();
    const { user } = useAuth();

    return (
        <>
            <TransitionOverlay isActive={!user && location.pathname !== "/login"} />
            <Navbar />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<ProtectedRoute><Operations /></ProtectedRoute>} />
                    <Route path="/performance" element={<ProtectedRoute><Performance /></ProtectedRoute>} />
                    <Route path="/finance" element={<ProtectedRoute><FinanceSustain /></ProtectedRoute>} />
                    <Route path="/smartmine" element={<ProtectedRoute><SmartMine /></ProtectedRoute>} />
                    <Route path="/admin" element={<ProtectedRoute requiredRole="admin"><AdminPanel /></ProtectedRoute>} />
                </Routes>
            </AnimatePresence>
        </>
    );
}

export default function App() {
    return (
        <AuthProvider>
            <Router>
                <AnimatedRoutes />
            </Router>
        </AuthProvider>
    );
}
