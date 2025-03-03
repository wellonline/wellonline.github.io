import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://well-foundation.github.io",
  base: "/well-foundation/",
  vite: {
    plugins: [tailwindcss()],
  },
});
