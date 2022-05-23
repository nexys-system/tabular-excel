import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import inject from "@rollup/plugin-inject";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/tabular-excel/",
  test: {
    // ...
  },
  build: {
    rollupOptions: {
      plugins: [inject({ Buffer: ["Buffer", "Buffer"] })],
    },
  },
});
