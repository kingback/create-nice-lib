module.exports = {
  presets: [
    ['@babel/preset-env', {
      loose: true,
      modules: process.env.PRESET_ENV_MODULES === 'esm' ? false : 'commonjs'
    }]
  ]
}