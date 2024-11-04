/*
 * @Author: haolian
 * @Date: 2024-10-22 14:01:01
 * @LastEditors: haolian
 * @LastEditTime: 2024-11-01 17:07:21
 * @Description: Do not edit
 * @FilePath: /USB-Paint/vite.config.ts
 */
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";
import { babel } from "@rollup/plugin-babel";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      emitCss: false, // 禁用生成独立 CSS 文件
    }),
    babel({
      babelHelpers: "runtime", //使用 Babel 运行时库，需安装 @babel/runtime
      exclude: "node_modules/**",
      extensions: [".js", ".mjs", ".svelte", ".ts"],
      babelrc: true,
      configFile: "./babel.config.json", // 确保使用你已有的 babel 配置
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // 允许在 Less 中使用 JavaScript 表达式
      },
    },
  },
  build: {
    minify: "terser",
    lib: {
      entry: resolve(__dirname, "./src/main.ts"), // 入口文件，根据你的项目路径调整
      name: "USBPaint",
      fileName: "usbpaint",
      formats: ["umd", "iife", "es"], // 使用 IIFE 格式生成一个自包含的文件
    },
    rollupOptions: {
      // input: {
      //   main: resolve(__dirname, "./src/main.ts"),
      // },
      output: {
        inlineDynamicImports: true, // 确保动态导入也在同一个文件中
      },
    },
  },
});
