# Vue multiPage

![passing](https://img.shields.io/badge/build-passing-brightgreen.svg)

## 前言

这是用 **vue-cli 2.9.3** 版本`vue init webpack`命令生成的的应用，在此基础上修改为多页面应用。[vue-cli@2.0 文档](https://github.com/vuejs/vue-cli)

如果需要vue-cli 3.x及以上的版本请移步[vue-cli@3.0 配置文档](https://cli.vuejs.org/zh/guide/#%E8%AF%A5%E7%B3%BB%E7%BB%9F%E7%9A%84%E7%BB%84%E4%BB%B6)，vue-cli@3.0有提供多页面配置教程

## tip

1.  **如果想新建页面的话需要在`src/pages`里新建文件夹，且文件夹里必须包括一个.html 文件，.js 文件，.vue 文件作为入口文件**
2.  `npm run dev`的时候提示打开 **http://localhost:12345/activity_rule.html** 即可
3.  为了方便维护`npm run build`出来的 html 文件是放在 pages 文件夹里的
4.  css 样式: 使用750px的设计稿，样式可以直接写px, 使用postcss 插件转换 px 为 rem，高保真还原设计图

注意⚠️：目前只有一个activity_rule 页面，不存在index首页，所以访问http://localhost:12345/，是找不到页面的！！

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

# serve with hot reload at localhost:8080/
npm run dev

# build for production with minification
npm run build
```

## 配置修改

### build/utils.js

```javascript
// build/utils.js 添加方法
const glob = require("glob");

exports.getEntries = (path) => {
  let entries = {};
  glob.sync(path).forEach(entry => {
    if(/(pages\/(?:.+[^.]))/.test(entry)) {
      entries[RegExp.$1.slice(0,RegExp.$1.lastIndexOf('/'))] = entry;
    }
  })
  return entries;
}
```

### build/webpack.base.config.js

```javascript
const entry = utils.getEntries('./src/pages/**/*.js') // 获得入口js文件

然后将`module.exports`里的 entry 改为我们定义的这个 ertry
```

### build/webpack.dev.config.js

```javascript
const entry = utils.getEntries('./src/pages/**/*.html') // 获得入口hmtl文件

for (let pathname in entry) {
    let filename = pathname.replace(/pages\//, '');
    let conf = {
        filename: `${filename}.html`,
        template: entry[pathname],
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
            // more options:
            // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
    }
    if (pathname in devWebpackConfig.entry) {
        conf.chunks = ['manifest', 'vendor', pathname];
        conf.hash = true;
    }
    devWebpackConfig.plugins.push(new HtmlWebpackPlugin(conf));
}

遍历entry入口hmtl文件，构建对于数量的new HtmlWebpackPlugin(conf)，push到 devWebpackConfig中
```

### build/webpack.prod.config.js

```javascript
const entry = utils.getEntries('./src/pages/**/*.html') // 获得入口hmtl文件

for (let pathname in entry) {
    // let filename = pathname.replace(/pages\//, '');
    let conf = {
        filename: `${pathname}.html`,
        template: entry[pathname],
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
            // more options:
            // https://github.com/kangax/html-minifier#options-quick-reference
        },
        // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        chunksSortMode: 'dependency'
    }
    if (pathname in webpackConfig.entry) {
        conf.chunks = ['manifest', 'vendor', pathname];
        conf.hash = true;
    }
    webpackConfig.plugins.push(new HtmlWebpackPlugin(conf));
}

prod文件配置修改同上。保证webpackConfig实例对象输出多页面。
```
