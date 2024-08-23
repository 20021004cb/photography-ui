const { defineConfig } = require("@vue/cli-service");
const timeStamp = new Date().getTime();

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: "src/main.ts",
    },
  },
  outputDir: 'docs',
  publicPath: '/',
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  lintOnSave:false,
  devServer: {
    client: {
      overlay: false
    }
  },
  configureWebpack: { // webpack 配置
    output: { // 把应用打包成umd库格式
         library:'myLibrary', // 输出重构  打包编译后的文件名称  【模块名称.时间戳】
    filename: `[name].${timeStamp}.js`,
         libraryTarget:'umd',
         globalObject:'this',
       },
     },
});
