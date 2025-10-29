import {
    LineChart, Line,
    BarChart, Bar,
    AreaChart, Area,
    RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
    ComposedChart,
    ScatterChart, Scatter,
    PieChart, Pie, Cell,
    CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from "recharts";

export default function Chart({ data, type = "line", color = "#00e0b8" }) {
    const COLORS = ["#00e0b8", "#f5b400", "#9b5de5", "#00bfa6", "#ff6f61"];

    return (
        <div className="w-full h-64">
            <ResponsiveContainer>
                {/* 🔹 LINE CHART */}
                {type === "line" && (
                    <LineChart data={data}>
                        <Line type="monotone" dataKey="value" stroke={color} strokeWidth={2.5} />
                        <CartesianGrid stroke="#1f2228" />
                        <XAxis dataKey="name" stroke="#999" />
                        <YAxis stroke="#999" />
                        <Tooltip
                            contentStyle={{
                                background: "#111",
                                border: "1px solid #222",
                                borderRadius: "8px",
                                color: "#fff",
                            }}
                        />
                    </LineChart>
                )}

                {/* 🔹 BAR CHART */}
                {type === "bar" && (
                    <BarChart data={data}>
                        <Bar dataKey="value" fill={color} radius={[6, 6, 0, 0]} />
                        <CartesianGrid stroke="#1f2228" />
                        <XAxis dataKey="name" stroke="#999" />
                        <YAxis stroke="#999" />
                        <Tooltip
                            contentStyle={{
                                background: "#111",
                                border: "1px solid #222",
                                borderRadius: "8px",
                                color: "#fff",
                            }}
                        />
                    </BarChart>
                )}

                {/* 🔹 AREA CHART */}
                {type === "area" && (
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="areaColor" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={color} stopOpacity={0.8} />
                                <stop offset="95%" stopColor={color} stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid stroke="#1f2228" />
                        <XAxis dataKey="name" stroke="#999" />
                        <YAxis stroke="#999" />
                        <Tooltip
                            contentStyle={{
                                background: "#111",
                                border: "1px solid #222",
                                borderRadius: "8px",
                                color: "#fff",
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke={color}
                            fillOpacity={1}
                            fill="url(#areaColor)"
                        />
                    </AreaChart>
                )}

                {/* 🔹 RADAR CHART */}
                {type === "radar" && (
                    <RadarChart outerRadius="80%" data={data}>
                        <PolarGrid stroke="#333" />
                        <PolarAngleAxis dataKey="name" stroke="#999" />
                        <PolarRadiusAxis stroke="#666" />
                        <Radar dataKey="value" stroke={color} fill={color} fillOpacity={0.6} />
                    </RadarChart>
                )}

                {/* 🔹 COMPOSED CHART (BAR + LINE) */}
                {type === "composed" && (
                    <ComposedChart data={data}>
                        <CartesianGrid stroke="#1f2228" />
                        <XAxis dataKey="name" stroke="#999" />
                        <YAxis stroke="#999" />
                        <Tooltip
                            contentStyle={{
                                background: "#111",
                                border: "1px solid #222",
                                borderRadius: "8px",
                                color: "#fff",
                            }}
                        />
                        <Legend />
                        <Bar dataKey="bar" barSize={20} fill="#f5b400" />
                        <Line type="monotone" dataKey="line" stroke="#00e0b8" strokeWidth={2.5} />
                    </ComposedChart>
                )}

                {/* 🔹 SCATTER CHART */}
                {type === "scatter" && (
                    <ScatterChart>
                        <CartesianGrid stroke="#1f2228" />
                        <XAxis dataKey="x" stroke="#999" />
                        <YAxis dataKey="y" stroke="#999" />
                        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                        <Scatter data={data} fill={color} />
                    </ScatterChart>
                )}

                {/* 🔹 PIE CHART */}
                {type === "pie" && (
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={90}
                            label
                        >
                            {data.map((_, i) => (
                                <Cell key={i} fill={COLORS[i % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                background: "#111",
                                border: "1px solid #222",
                                borderRadius: "8px",
                                color: "#fff",
                            }}
                        />
                    </PieChart>
                )}
            </ResponsiveContainer>
        </div>
    );
}
