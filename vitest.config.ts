/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { coverageConfigDefaults, defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: { postcss: { plugins: [] } },
  test: {
    environment: "jsdom",
    globals: true,
    root: "./",
    include: ["./app/**/*.spec.{ts,tsx}"],
    setupFiles: ["./tests/setup/setup-test-env.ts"],
    restoreMocks: true,
    coverage: {
      provider: "v8",
      reportsDirectory: "./coverage",
      reportOnFailure: true,
      enabled: true,
      reporter: [
        "text",
        "text-summary",
        "json-summary",
        "html",
        "json",
        "cobertura",
      ],
      include: ["app/**/*.{ts,tsx}"],
      exclude: [
        "app/root.tsx",
        "app/**/*.spec.{ts,tsx}",
        "app/**/tests/**",
        "app/**/*.stories.{ts,tsx}",
        "**/entry.*.tsx",
        ...coverageConfigDefaults.exclude,
      ],
      all: true,
    },
  },
});
