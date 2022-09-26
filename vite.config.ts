import { defineConfig, UserConfigExport } from "vitest/config";
import react from "@vitejs/plugin-react";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import rollupNodePolyFill from "rollup-plugin-node-polyfills";
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";

const baseConfig: UserConfigExport = {
  plugins: [react()],
  test: {
    // ...
  },

  build: {
    target: ["es2020"],
    rollupOptions: {
      plugins: [
        // Enable rollup polyfills plugin
        // used during production bundling
        // @ts-ignore
        (rollupNodePolyFill as any)(),
      ],
    },
  },
  resolve: {
    alias: { buffer: "rollup-plugin-node-polyfills/polyfills/buffer-es6" },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis",
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // if  `mode===ghpages`: we add the path prefix to match the path prefix of gh pages
  if (mode === "ghpages") {
    return { ...baseConfig, base: "/tabular-excel/" };
  }

  return baseConfig;
});
