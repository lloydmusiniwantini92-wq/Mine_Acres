import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute({ children, requiredRole }) {
    const { user } = useAuth();
    if (!user) return <Navigate to="/login" replace />;
    if (requiredRole && user.role !== requiredRole && user.role !== "admin")
        return <Navigate to="/unauthorized" replace />;
    return children;
}
