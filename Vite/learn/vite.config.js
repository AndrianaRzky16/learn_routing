import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  plugins: [],
  resolve: {
    alias: {
      "@": "./src",
    },
  },
  server: {
    host: "127.0.0.1",
  },
  build: {
    outDir: "dist",
  },
});
