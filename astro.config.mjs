import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://well-foundation.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
  base: "https://wellonline.github.io/well-foundation/",
});
