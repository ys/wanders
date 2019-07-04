module.exports = {
  plugins: {
    autoprefixer: {
      browsers: [
        "last 2 versions",
        "Explorer >= 8",
      ]
    },
    '@fullhuman/postcss-purgecss': {
      content: [
        '**/*.html',
      ],
      whitelist: ["medium-zoom--open", "fullwidth", "vertical"],
      whitelistPatterns: [/always-/, /max-/]
    },
  },
}
