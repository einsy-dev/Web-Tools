import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/localStorage/index.ts",
    "src/findElement/index.ts",
    "src/genKey/index.ts"
  ],
  format: ["cjs", "esm"], // Build for commonJS and ESmodules
  dts: true, // Generate declaration file (.d.ts)
  minify: true, // Disable minification 
  splitting: false, 
  sourcemap: true,
  clean: true
});
