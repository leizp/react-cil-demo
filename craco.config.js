const CracoLessPlugin = require('craco-less');
const CracoAlias = require("craco-alias");
const CracoAntDesignPlugin = require("craco-antd");
const path = require('path')
const ip = require('ip').address()
module.exports = {
  webpack: {
    plugins: [],
    configure: { /* Any webpack configuration options: https://webpack.js.org/configuration */ },
    // configure: (webpackConfig, { env, paths }) => { return webpackConfig; }
  },
  plugins: [
    /* 支持less module */
    {
      plugin: CracoLessPlugin,
      options: {
        cssLoaderOptions: {
          modules: { localIdentName: "[local]_[hash:base64:5]" },
        },
        modifyLessRule: function(lessRule, _context) {
          lessRule.test = /\.(module)\.(less)$/;
          lessRule.exclude = path.join(__dirname, 'node_modules');
          return lessRule;
        },
      },
    },
    { // antd组件按需加载&样式覆盖等
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(
          __dirname,
          "src/styles/antd.theme.less"
        ),
      },
    },
    { // 配置别名
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.extend.json"
      }
    }
  ],
  //devServer 设置
  devServer: (devServerConfig) => {
    return {
      ...devServerConfig,
      host: ip,
      compress: true, // 服务开启gzip
      // 设置代理
      // proxy: {
      //   '/api': {
      //     target: 'https://dolphin-test.cootekos.com/',
      //     changeOrigin: true,
      //     xfwd: false,
      //   }
      // }
    }
  }
}
