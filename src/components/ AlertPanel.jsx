export default function AlertPanel({ alerts = [] }) {
    if (!alerts.length) return null;
    return (
        <div className="card border border-red-500/40">
            <h2 className="text-lg font-plex text-red-400 mb-3">System Alerts</h2>
            <ul className="list-disc ml-6 space-y-1 text-sm text-gray-300">
                {alerts.map((a, i) => (
                    <li key={i}>{a}</li>
                ))}
            </ul>
        </div>
    );
}

