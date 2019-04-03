process.env.PLATFORM = process.env.PLATFORM || 'browser'

module.exports = function override (config, env) {
  if (process.env.PLATFORM === 'desktop') {
    delete config.node
    config.target = 'electron-renderer'
  }
  config.output.publicPath = ''
  return config
}
