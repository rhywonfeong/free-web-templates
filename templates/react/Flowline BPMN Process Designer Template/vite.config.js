import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Build config hardened for publishing.
 *
 * 1. base: "./"
 *    With the default base ("/") Vite writes absolute asset URLs into
 *    dist/index.html:
 *
 *      <script src="/assets/index-a1b2c3.js">
 *
 *    That only resolves when the site is served from the domain root.
 *    Published builds usually land on a sub-path (…/sites/<id>/,
 *    …/preview/<hash>/) or are opened over file://, where "/assets/..." points
 *    at the host root, 404s, and the browser paints an empty #root — the
 *    "white page". "./" emits relative URLs so the bundle resolves from
 *    wherever index.html happens to live.
 *
 * 2. Forced production NODE_ENV on build.
 *    Vite 4 derives `isProduction` from the ambient process.env.NODE_ENV. Many
 *    CI, container and sandbox images export NODE_ENV=development, which
 *    silently makes `vite build` emit the *development* copies of react and
 *    react-dom: ~3.5x larger, far slower, and noisy with dev-only warnings.
 *    Pinning it here makes the output identical no matter where it is built.
 */
export default defineConfig(({ command }) => {
  const isBuild = command === "build";

  // Vite reads process.env.NODE_ENV while resolving the config, so setting it
  // here (before the returned object is consumed) is respected.
  if (isBuild) process.env.NODE_ENV = "production";

  return {
    base: "./",
    plugins: [react()],
    // Belt and braces: even if something upstream flips NODE_ENV back, the
    // bundled code still sees "production" and tree-shakes the dev branches.
    define: isBuild
      ? { "process.env.NODE_ENV": JSON.stringify("production") }
      : {},
    build: {
      outDir: "dist",
      assetsDir: "assets",
      target: "es2020",
      minify: "esbuild",
      // Some static hosts and strict CSPs reject data: URIs, which is another
      // silent white-page source. Emit every asset as a real file.
      assetsInlineLimit: 0,
      sourcemap: false,
      emptyOutDir: true,
    },
    server: {
      host: "0.0.0.0",
    },
    preview: {
      host: "0.0.0.0",
    },
  };
});
