module.exports = {
  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './srv'
    }
  },
  devServer: {
    proxy: 'http://localhost:3000',
  }
}
