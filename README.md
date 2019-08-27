# React Mobx Boilerplate

The boilerplate based on [react](https://facebook.github.io/react), [mobx](https://github.com/mobxjs/mobx), [react router](https://github.com/ReactTraining/react-router), [webpack](https://webpack.js.org/), [nprogress](http://ricostacruz.com/nprogress/), [axios](https://github.com/mzabriskie/axios) for rapid project development

## Getting Started

```shell
# dev (Startup the dev server and the mock server.)
$ npm run dev

# build
$ npm run build

# mock server
$ npm run mock

# lint
$ npm run lint
```


## Configuration

```shell
$ open ./build.config.js
```

```js
const PORT = 8881;
const MOCK_PORT = 8882;

module.exports = {
  title: 'React boilerplate',
  output: './dist',
  vendor: {
    // 打包到dll文件中，按需加载的模块不要写在这里
    modules: [
      'core-js/stable',
      '@loadable/component',
      'axios',
      'react',
      'react-dom',
      'react-router',
      'react-router-dom',
      'mobx',
      'mobx-react',
      'nprogress'
    ]
  },
  port: PORT,
  mockPort: MOCK_PORT,
  proxy: {
    // 以/api开头的请求代理到数据模拟服务
    '/api/*': {
      target: `http://localhost:${MOCK_PORT}/`,
      secure: false
    },
    '/github/api/*': {
      target: 'https://api.github.com',
      changeOrigin: true,
      pathRewrite: {
        '^/github/api': ''
      }
    }
  }
}
```
