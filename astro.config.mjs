import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://www.mildlysupreme.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
})
