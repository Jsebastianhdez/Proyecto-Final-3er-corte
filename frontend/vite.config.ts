import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 🚀 TailwindCSS v4 se activa automáticamente sin configuración postcss
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
  build: {
    outDir: "dist",
  },
});
