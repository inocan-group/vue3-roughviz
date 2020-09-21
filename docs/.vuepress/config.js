const path = require('path')

module.exports = {
  plugins: [
    'vuepress-plugin-typescript',
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, '../../src/lib-components'),
      },
    ],
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../../src'),
      },
    },
  },
}
