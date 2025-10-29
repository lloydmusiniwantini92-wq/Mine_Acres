import Card from "../components/Card";
import Chart from "../components/Chart";
import { datasets } from "../data/fakeData";
import { motion } from "framer-motion";

export default function SmartMine() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-8">
            <h1 className="text-3xl font-bold text-[var(--accent)] mb-6">AI & Predictive Analytics</h1>
            <div className="grid md:grid-cols-2 gap-6">
                <Card title="Sensor Health Index (%)">
                    <Chart data={datasets.sensors} type="area" color="#9b5de5" />
                </Card>
                <Card title="Predictive Maintenance Alerts">
                    <ul className="list-disc ml-6 space-y-1 text-gray-300">
                        <li>⚙ Crusher Bearing Vibration High</li>
                        <li>💧 Leach Pump Temperature Rising</li>
                        <li>🪫 Mill Motor Torque Above Threshold</li>
                    </ul>
                </Card>
            </div>
        </motion.div>
    );
}
