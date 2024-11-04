module.exports = {
  // 继承的规则
  extends: ["@commitlint/config-conventional"],
  // 定义规则类型
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    "type-enum": [
      2,
      "always",
      [
        "init", // 初始化
        "feat", // 增加新功能
        "fix", // 修复 bug
        "add", // 增加代码逻辑
        "del", // 删除功能
        "update", // 更新功能
        "docs", // 文档相关的改动
        "style", // 不影响代码逻辑的改动，例如修改空格，缩进等
        "build", // 构造工具或者相关依赖的改动
        "refactor", //  代码重构
        "revert", // 撤销，版本回退
        "test", // 添加或修改测试
        "perf", // 提高性能的改动
        "chore", // 修改 src 或者 test 的其余修改，例如构建过程或辅助工具的变动
        "ci", // CI 配置，脚本文件等改动
      ],
    ],
    "body-leading-blank": [2, "always"], // body换行
    "footer-leading-blank": [1, "always"], // footer 换行
    "header-max-length": [2, "always", 108], // 头部的字数
    "subject-empty": [0, "never"], // <subject> 不能为空 加never 应该表示可以为空(个人理解)
    "type-empty": [2, "never"],
    "subject-case": [0], // subject 大小写不做校验
  },
};
