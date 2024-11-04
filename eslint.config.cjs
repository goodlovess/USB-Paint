/* eslint-env node */

module.exports = {
  rules: {
    // semi: ["error", "always"],
    indent: ["error", 2, { SwitchCase: 1 }],
    // 关闭eslint检查文件名是否为驼峰命名
    "vue/multi-word-component-names": "off",
    // // 设置单行最长长度
    // "max-len": [1, { code: 200 }],
    "no-console": "off",
    "no-debugger": "warn",
    // camelcase: ["off", { properties: "always" }], // 非驼峰命名警告
    // "comma-dangle": 0, // 结尾接上分号
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    // 禁止出现空语句块，catch可以
    "no-empty": ["error", { allowEmptyCatch: true }],
  },
};
