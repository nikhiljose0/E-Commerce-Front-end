import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Load environment variables
const API_URL = process.env.VITE_API_URL || "http://localhost:4000";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // ✅ Redirects local API calls to backend during development
      "/api": {
        target: API_URL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
