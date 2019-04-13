
/**
 * [Vue项目自动转换 px 为 rem，高保真还原设计图](https://juejin.im/post/5a716c4c6fb9a01cb42cac4b)
 */

module.exports = {
    "plugins": {
      "postcss-import": {},
      "postcss-url": {},
      // to edit target browsers: use "browserslist" field in package.json
      "autoprefixer": {},
      "postcss-pxtorem": {
          rootValue: 32.0,
          propWhiteList: []
      }
    }
}
