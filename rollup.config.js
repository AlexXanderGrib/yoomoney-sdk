import typescript from "rollup-plugin-typescript2";
import { builtinModules } from "module";
import { dependencies, devDependencies, name, version } from "./package.json";
import replace from "@rollup/plugin-replace";
import glob from "glob";
import cleanup from "rollup-plugin-cleanup";
import prettier from "rollup-plugin-prettier";

import prettierConfig from "./.prettierrc.json";

/** @type {import('rollup').RollupOptions} */
const config = {
  input: [
    ...glob.sync("./src/{index,auth,api,notifications,payment-form-builder}.ts")
  ],
  external: [
    ...builtinModules,
    ...Object.keys({ ...devDependencies, ...dependencies })
  ],
  output: [
    {
      dir: "./dist/cjs",
      format: "commonjs",
      exports: "named",
      preserveModules: true,
      entryFileNames: "[name].js",
      compact: true,
      generatedCode: {
        constBindings: true,
        arrowFunctions: true,
        objectShorthand: true
      },
      externalLiveBindings: false,
      minifyInternalExports: true
    },
    {
      dir: "./dist/esm",
      format: "module",
      exports: "named",
      preserveModules: true,
      entryFileNames: "[name].mjs",
      compact: true,
      generatedCode: {
        constBindings: true,
        arrowFunctions: true,
        objectShorthand: true
      },
      externalLiveBindings: false,
      minifyInternalExports: true
    }
  ],
  treeshake: {
    unknownGlobalSideEffects: false,
    moduleSideEffects: false,
    correctVarValueBeforeDeclaration: false,
    preset: "smallest",
    annotations: false,
    propertyReadSideEffects: false
  },
  plugins: [
    typescript({ tsconfig: "./tsconfig.build.json" }),
    replace({
      values: {
        "process.env.USER_AGENT_STRING": JSON.stringify(
          `${name}/${version} (+https://npmjs.com/package/${name})`
        )
      },
      preventAssignment: true
    }),
    cleanup({
      extensions: ["js", "ts", "mjs"],
      comments: ["jsdoc"],
      compactComments: true
    }),
    prettier({
      ...prettierConfig,
      parser: "babel-ts"
    })
  ]
};

export default config;
