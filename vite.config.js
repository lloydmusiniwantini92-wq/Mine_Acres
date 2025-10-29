import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Launch Brave browser automatically in dev
const bravePath = "C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe";

export default defineConfig(({ command }) => ({
    plugins: [react()],
    base: "/Mine_Acres/", // ✅ fixes GitHub Pages blank screen / asset 404s
    server:
        command === "serve"
            ? {
                port: 5173,
                open: true,
                browser: bravePath,
            }
            : undefined,
}));
