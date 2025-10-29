export const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];

export function makeSeries(names, base, spread = 10) {
    return names.map((n, i) => ({
        name: n,
        value: base[i] + Math.random() * spread - spread / 2,
    }));
}

export const datasets = {
    production: makeSeries(days, [320, 340, 310, 400, 370]),
    blasting: makeSeries(days, [88, 90, 92, 85, 87]),
    recovery: makeSeries(days, [91, 93, 90, 94, 92]),
    diesel: makeSeries(days, [310, 330, 290, 310, 305]),

    crusher: makeSeries(days, [180, 200, 210, 190, 205]),
    downtime: makeSeries(days, [2, 0.5, 1, 1.5, 0]),
    chemicals: makeSeries(days, [12, 11, 10, 13, 12]),

    attendance: makeSeries(days, [95, 90, 97, 93, 96]),
    productivity: makeSeries(days, [88, 92, 85, 90, 94]),

    costs: makeSeries(days, [120, 115, 130, 110, 125]),
    revenue: makeSeries(days, [18000, 21000, 25000, 22000, 26000]),

    water: makeSeries(days, [500, 480, 510, 495, 505]),
    emissions: makeSeries(days, [20, 22, 18, 19, 21]),

    sensors: makeSeries(days, [98, 99, 97, 99, 98]),
};
