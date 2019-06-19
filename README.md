# vue多页面应用

## 前言

这是用 vue-cli 2.9.3 版本`vue init webpack`命令生成的的应用，在此基础上加了些东西变成了多页面的

如果想看vue-cli 3.x及以上的版本请移步[v3分支](https://github.com/JayZangwill/vue-multipage/tree/v3)

## tip

1.  如果想新建页面的话需要在`src/pages`里新建文件夹，且文件夹里必须包括一个.html 文件，.js 文件，.vue 文件作为入口文件
2.  `npm run dev`的时候提示打开 localhost:8080 即可
3.  为了方便维护`npm run build`出来的 html 文件是放在 pages 文件夹里的
4.  css 样式: 使用750px的设计稿，样式可以直接写px, 使用postcss 插件转换 px 为 rem，高保真还原设计图

## 目录结构:
```
.
|——build
|  |—— build.js                   npm run build
|  |—— check-versions.js          版本检测
|  |—— utils.js                   构建公用方法
|  |—— vue-loader.conf.js         vue-loader 配置文件
|  |—— webpack.base.conf.js       webpack公用conf 文件
|  |—— webpack.dev.conf.js        开发配置
|  |—— webpack.prod.conf.js       生产配置
|——config
|  |—— dev.env.js                 开发环境变量
|  |—— index.js                   webpack公用配置文件
|  └── prod.env.js                生产环境变量
|——src
|  |—— assets                     图片目录
|  |—— components                 公用组件目录 
|  |—— pages                      page页面目录
|  └── utils                      公用方法
|——static
|——.babelrc                       babel 配置文件
|——.postcssrc.js                  postcss 配置文件
|——package.json                   package 文件
|——README.md                      README 项目描述
|——yarn.lock                      yarn 安装包配置列表
```

## Build Setup

```bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080/module/index.html
npm run dev

# build for production with minification
npm run build
```
