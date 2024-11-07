/*
 * @Author: haolian
 * @Date: 2024-10-31 19:14:19
 * @LastEditors: haolian
 * @LastEditTime: 2024-11-05 19:31:58
 * @Description: Do not edit
 * @FilePath: /USB-Paint/svelte.config.js
 */
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { sveltePreprocess } from "svelte-preprocess";

export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    sveltePreprocess({
      sass: true,
    }),
  ],
};
