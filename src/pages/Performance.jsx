import Card from "../components/Card";
import Chart from "../components/Chart";
import { datasets } from "../data/fakeData";
import { motion } from "framer-motion";

export default function Performance() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-8">
            <h1 className="text-3xl font-bold text-[var(--accent)] mb-8">Performance Dashboard</h1>

            <h2 className="text-xl font-semibold text-[var(--accent-secondary)] mb-3">Production Efficiency</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card title="Crusher Throughput (t/h)">
                    <Chart data={datasets.crusher} type="line" color="#00e0b8" />
                </Card>
                <Card title="Chemical Consumption (kg)">
                    <Chart data={datasets.chemicals} type="bar" color="#f5b400" />
                </Card>
            </div>

            <h2 className="text-xl font-semibold text-[var(--accent-secondary)] mb-3">Workforce Performance</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <Card title="Attendance Rate (%)">
                    <Chart data={datasets.attendance} type="line" color="#f5b400" />
                </Card>
                <Card title="Productivity Index">
                    <Chart data={datasets.productivity} type="area" color="#00e0b8" />
                </Card>
            </div>
        </motion.div>
    );
}
