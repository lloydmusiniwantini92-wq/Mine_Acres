import Card from "../components/Card";
import { motion } from "framer-motion";

export default function AdminPanel() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-8">
            <h1 className="text-3xl font-bold text-[var(--accent)] mb-6">Admin Control</h1>
            <Card title="System Access Logs">
                <ul className="list-disc ml-6 space-y-1">
                    <li>Supervisor John logged in at 07:45</li>
                    <li>Worker Maria updated shift report</li>
                    <li>System Maintenance – Scheduled for Friday</li>
                </ul>
            </Card>

            <Card title="Manage Roles">
                <p className="text-gray-300">
                    Role management and user control features coming soon.
                </p>
            </Card>
        </motion.div>
    );
}
