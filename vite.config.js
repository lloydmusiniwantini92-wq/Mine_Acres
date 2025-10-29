import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ exact Brave path from your screenshot
const bravePath = "C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe";

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,            // keep Vite default
        open: true,            // auto-open browser
        browser: bravePath,    // open specifically in Brave
    },
});
