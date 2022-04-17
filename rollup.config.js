import typescript from "rollup-plugin-typescript2";
import { builtinModules } from "module";
import { dependencies, devDependencies } from "./package.json";

/** @type {import('rollup').RollupOptions} */
const config = {
  input: "./src/index.ts",
  external: [
    ...builtinModules,
    ...Object.keys({ ...devDependencies, ...dependencies })
  ],
  output: [
    {
      dir: "./dist/cjs",
      format: "commonjs",
      exports: "named",
      preserveModules: true
    },
    {
      dir: "./dist/esm",
      format: "module",
      exports: "named",
      preserveModules: true
    }
  ],
  plugins: [typescript({ tsconfig: "./tsconfig.json" })]
};

export default config;
