/*
 * @Author: haolian
 * @Date: 2024-10-22 15:47:10
 * @LastEditors: haolian
 * @LastEditTime: 2024-10-25 19:28:33
 * @Description: Do not edit
 * @FilePath: /USB-Paint/.prettierrc.cjs
 */
module.exports = {
  semi: true,
  singleQuote: false,
  printWidth: 200,
  // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  trailingComma: "all",
  useTabs: false,
  tabWidth: 2,
  bracketSpacing: true,
  arrowParens: "avoid", // 当箭头函数中只有一个参数的时候可以忽略括弧
  sxSingleQuote: false, // jsx 不使用单引号，而使用双引号
  jsxBracketSameLine: false, // 多行JSX中的>放置在最后一行的结尾，而不是另起一行（默认false）
  vueIndentScriptAndStyle: false, //（默认值）对于 .vue 文件，不缩进 <script> 和 <style> 里的内容
  quoteProps: "as-needed", //（默认值）仅仅当必须的时候才会加上双引号
  plugins: ["prettier-plugin-svelte"],
};
