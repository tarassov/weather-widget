import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import components from "unplugin-vue-components/vite";
import { resolve } from "node:path";
import { PrimeVueResolver } from "unplugin-vue-components/resolvers";
import IconsResolver from "unplugin-icons/resolver";
import icons from "unplugin-icons/vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/main.ts",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled into the library.
      // external: ["vue", "@vueuse/core"],
    },
    sourcemap: true,
    // Reduce bloat from legacy polyfills.
    target: "esnext",
    // Leave minification up to applications.
    minify: false,
  },
  plugins: [
    components({
      dts: "src/components.d.ts",
      resolvers: [
        IconsResolver({ componentPrefix: '' }),
        PrimeVueResolver({
          importStyle: true,
          importIcons: true,
          importTheme: "md-light-indigo",
          prefix: "Pi",
        }),
      ],
      directives: true,
      deep: true,
    }),
    icons({
      autoInstall: true,
    }),
    dts(),
    vue({
      reactivityTransform: resolve(__dirname, "src"),
      customElement: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
