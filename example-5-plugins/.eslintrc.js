module.exports = {
  parserOptions: {
    "sourceType": 'module'
  },
  parser: require.resolve('vue-eslint-parser'),
  plugins: ['vue'],
  processor: 'vue/.vue',
  rules: {
    "vue/no-template-key": 2
  },
  extends: 'plugin:vue/recommended'
}