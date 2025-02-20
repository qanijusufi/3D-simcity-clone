import { defineConfig } from "vite";

export default defineConfig({
  root: "src", // Set source directory
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "assets", // Ensures assets are built in a separate folder
    rollupOptions: {
      input: "src/index.html", // Make sure Vite looks for index.html inside src
    },
  },
});
