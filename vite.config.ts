import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const isStorybook = process.argv[1]?.includes("storybook");

export default defineConfig({
  plugins: [!isStorybook && reactRouter(), tsconfigPaths()].filter(Boolean),
});
