import Card from "../components/Card";
import Chart from "../components/Chart";
import { datasets } from "../data/fakeData";
import { motion } from "framer-motion";

export default function FinanceSustain() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-8">
            <h1 className="text-3xl font-bold text-[var(--accent)] mb-8">Finance & Sustainability</h1>

            <h2 className="text-xl font-semibold text-[var(--accent-secondary)] mb-3">Financial Metrics</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card title="Operating Cost per Ton ($)">
                    <Chart data={datasets.costs} type="line" color="#f5b400" />
                </Card>
                <Card title="Revenue ($)">
                    <Chart data={datasets.revenue} type="area" color="#00e0b8" />
                </Card>
            </div>

            <h2 className="text-xl font-semibold text-[var(--accent-secondary)] mb-3">Environmental Metrics</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <Card title="Water Usage (m³/day)">
                    <Chart data={datasets.water} type="line" color="#00e0b8" />
                </Card>
                <Card title="Carbon Emissions (kg CO₂)">
                    <Chart data={datasets.emissions} type="bar" color="#f5b400" />
                </Card>
            </div>
        </motion.div>
    );
}
