import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import packageJson from "./package.json" with { type: "json" };
import { builtinModules } from "module";

const external = [
  Object.keys(packageJson.devDependencies ?? {}),
  Object.keys(packageJson.optionalDependencies ?? {}),
  ...Object.keys(packageJson.dependencies ?? {}),
  ...builtinModules
];

export default defineConfig({
  appType: "custom",

  define: {
    "process.env.USER_AGENT_STRING": `"${packageJson.name}/${packageJson.version} (+https://npmjs.com/package/${packageJson.name})"`
  },

  build: {
    target: ["node16"],
    minify: false,

    rollupOptions: { external },

    lib: {
      name: "yoomoney-sdk",
      entry: {
        index: "./src/index.ts"
      }
    }
  },

  plugins: [
    dts({
      exclude: ["./src/__tests__"],
      tsconfigPath: "./tsconfig.json"
    })
  ]
});
