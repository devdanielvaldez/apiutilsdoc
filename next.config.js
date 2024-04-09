const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  output: "export",
  reactStrictMode: true,
})

module.exports = withNextra()
