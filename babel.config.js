const isPro = process.env.NODE_ENV == 'production'
const plugins = [
  ['transform-object-rest-spread'],
  [
    'import',
    {
      libraryName: 'muse-ui',
      libraryDirectory: 'lib',
      camel2DashComponentName: false,
    },
  ],
  ['import', {
    libraryName: 'vant',
    libraryDirectory: 'es',
    style: true
  }, 'vant']
]
if (isPro) {
  plugins.push('transform-remove-console')
}

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: plugins,
}
