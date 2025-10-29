import Card from "../components/Card";
import Chart from "../components/Chart";
import { datasets } from "../data/fakeData";
import { motion } from "framer-motion";

export default function Operations() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-8">
            <h1 className="text-3xl font-bold text-[var(--accent)] mb-8">Operations Dashboard</h1>

            <h2 className="text-xl font-semibold text-[var(--accent-secondary)] mb-3">Mining & Extraction</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card title="Ore Mined per Shift (t)">
                    <Chart data={datasets.production} type="bar" color="#00e0b8" />
                </Card>
                <Card title="Blasting Efficiency (%)">
                    <Chart data={datasets.blasting} type="line" color="#f5b400" />
                </Card>
            </div>

            <h2 className="text-xl font-semibold text-[var(--accent-secondary)] mb-3">Milling & Leaching</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card title="Mill Downtime (hrs)">
                    <Chart data={datasets.downtime} type="bar" color="#f5b400" />
                </Card>
                <Card title="Recovery Rate (%)">
                    <Chart data={datasets.recovery} type="area" color="#9b5de5" />
                </Card>
            </div>

            <h2 className="text-xl font-semibold text-[var(--accent-secondary)] mb-3">Engineering & Maintenance</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <Card title="Diesel Used (L)">
                    <Chart data={datasets.diesel} type="bar" color="#00e0b8" />
                </Card>
                <Card title="Equipment Health Index (%)">
                    <Chart data={datasets.sensors} type="line" color="#9b5de5" />
                </Card>
            </div>
        </motion.div>
    );
}
