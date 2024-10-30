import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import VueEslintParser from 'vue-eslint-parser'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  { files: ['**/*.{ts,js,vue}'] },
  {
    languageOptions: {
      globals: [globals.browser, globals.es2022, globals.node, globals.jest]
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  {
    plugins: {
      pluginVue: pluginVue
    },
    rules: {
      'vue/multi-word-component-names': 'off', // 要求组件名称始终为 “-” 链接的单词
      'vue/script-setup-uses-vars': 'error', // 防止<script setup>使用的变量<template>被标记为未使用
      'vue/no-mutating-props': 'off', // 不允许组件 prop的改变
      'vue/attribute-hyphenation': 'off' // 对模板中的自定义组件强制执行属性命名样式
    }
  },
  {
    plugins: {
      tseslint: tseslint
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
      '@typescript-eslint/prefer-ts-expect-error': 'error', // 禁止使用 @ts-ignore
      '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-namespace': 'off', // 禁止使用自定义 TypeScript 模块和命名空间。
      '@typescript-eslint/semi': 'off'
    }
  },
  {
    rules: {
      'no-var': 'error', // 要求使用 let 或 const 而不是 var
      'no-unused-vars': 'error', // 禁止出现未使用的变量
      'no-multiple-empty-lines': ['warn', { max: 1 }], // 不允许多个空行
      // eslint-disable-next-line no-undef
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      // eslint-disable-next-line no-undef
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-unexpected-multiline': 'error', // 禁止空余的多行
      'no-useless-escape': 'off', // 禁止不必要的转义字符
      'no-undef': 'error' // 禁止出现未使用的变量
    }
  },
  {
    languageOptions: {
      parser: VueEslintParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  },
  {
    ignores: ['node_modules/', 'dist/']
  },
  eslintPluginPrettierRecommended
]

// import globals from "globals";
// import pluginJs from "@eslint/js";
// import pluginVue from "eslint-plugin-vue";

// export default [
//   {files: ["**/*.{ts,js,mjs,cjs,vue}"]}, // 校验文件类型，如果明确我们的项目中没有 mjs 和 cjs 文件,可以删除掉这两个后缀
//   {languageOptions: { globals: globals.browser }},  // 全局变量
//   pluginJs.configs.recommended, // eslint-plugin-js 的推荐配置, 具体有啥推荐，可以查看官方文档 https://zh-hans.eslint.org/docs/latest/rules/
//   ...pluginVue.configs["flat/essential"], // 表示使用Vue.js的扁平化基本配置
//   /** 自定义规则 */
//   {
//     rules: {
//       // 代码风格
//       "indent": ["error", 2], // 缩进2个空格
//       "quotes": ["error", "single"],  // 字符串使用单引号
//       "semi": ["error", "always"],  // 语句结尾使用分号
//       "space-before-function-paren": ["error", "never"],  // 函数定义时括号前面不加空格

//       // 变量声明
//       "no-var": "error",  // 禁止使用 var
//       "no-unused-vars": "error",  // 禁止出现未使用的变量

//       // 最佳实践
//       "no-console": "error",  // 禁止使用 console
//       "no-debugger": "error", // 禁止使用 debugger
//       "no-alert": "error",    // 禁止使用 alert

//       // 错误处理
//       "handle-callback-err": "error", // 要求回调函数中有错误处理

//       // Vue
//       "vue/html-indent": ["error", 2],  // vue文件缩进2个空格
//     }
//   }
// ];
