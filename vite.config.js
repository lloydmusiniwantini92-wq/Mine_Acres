import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Custom Brave browser path for local auto-launch
const bravePath = "C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe";

export default defineConfig(({ command }) => ({
    plugins: [react()],
    base: "/Mine_Acres/", // ✅ REQUIRED for GitHub Pages
    server:
        command === "serve"
            ? {
                port: 5173,
                open: true,
                browser: bravePath,
            }
            : undefined,
}));
