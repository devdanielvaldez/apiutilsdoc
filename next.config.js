const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
})

module.exports = withNextra()
