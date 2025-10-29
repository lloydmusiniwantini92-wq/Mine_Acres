import { useEffect, useState } from "react";

export default function useLiveData(metric = "tonnage", interval = 5000) {
    const [data, setData] = useState(generateData(metric));

    useEffect(() => {
        const id = setInterval(() => {
            setData(generateData(metric));
        }, interval);
        return () => clearInterval(id);
    }, [metric, interval]);

    return data;
}

function generateData(metric) {
    const datasets = {
        tonnage: [320, 280, 340, 310, 400],
        revenue: [18000, 21000, 25000, 22000, 26000],
        diesel: [290, 320, 310, 280, 330],
        productivity: [88, 92, 85, 90, 94],
        attendance: [95, 90, 97, 93, 96],
    };
    const base = datasets[metric] || [0, 0, 0, 0, 0];
    return ["Mon", "Tue", "Wed", "Thu", "Fri"].map((name, i) => ({
        name,
        value: base[i] + Math.floor(Math.random() * 20 - 10),
    }));
}
