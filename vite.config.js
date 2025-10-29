import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Keep Brave for local dev only
const bravePath = "C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe";

export default defineConfig(({ command }) => ({
    plugins: [react()],

    // Base path for GitHub Pages (must match your repo name)
    base: "/Mine_Acres/",

    server: command === "serve" ? {
        port: 5173,
        open: true,
        browser: bravePath,
    } : undefined,
}));
