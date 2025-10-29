import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const bravePath = "C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe";

export default defineConfig(({ command }) => ({
    plugins: [react()],
    base: "/Mine_Acres/", // 👈 THIS fixes GitHub Pages blank screen
    server:
        command === "serve"
            ? { port: 5173, open: true, browser: bravePath }
            : undefined,
}));
