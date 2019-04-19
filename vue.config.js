
module.exports = {
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('@tianyong90/vue-markdown-loader')
      .loader('@tianyong90/vue-markdown-loader')
      .end()
  }
}
