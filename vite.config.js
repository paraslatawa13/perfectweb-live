// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    // Optional: bundle analyzer to visualize JS size (run `npm run build`)
    visualizer({ filename: "bundle-report.html", open: false }),
  ],

  build: {
    target: "esnext",
    minify: "terser",
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 800, // helps avoid false warnings
    rollupOptions: {
      output: {
        manualChunks: {
          // Split heavy dependencies into separate lazy chunks
          react: ["react", "react-dom"],
          motion: ["framer-motion"],
          swiper: ["swiper"],
          sweetalert: ["sweetalert2"],
        },
      },
    },
  },

  esbuild: {
    // Removes console logs and debuggers → faster parsing
    drop: ["console", "debugger"],
  },

  optimizeDeps: {
    include: ["react", "react-dom"],
    exclude: ["sweetalert2"], // so it stays dynamically imported
  },

  // Note: do NOT set long-lived immutable cache headers on the dev server —
  // /src/*.jsx files are unhashed, so the browser ends up mixing stale and
  // fresh modules (causes "Invalid hook call" / duplicate React errors).
  server: {
    allowedHosts: ["porthole-rise-hammock.ngrok-free.dev"],
    host: "0.0.0.0",
    headers: {
      "Cache-Control": "no-cache",
    },
    
  },
  preview: {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  },
});