module.exports = {
  rules: {
    "semi": 2
  },
  overrides: [
    {
      files: ['other-*.js'],
      rules: {
        "semi": 0
      }
    }
  ]
}