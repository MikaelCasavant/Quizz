import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function absoluteOgUrls() {
  return {
    name: 'absolute-og-urls',
    transformIndexHtml(html: string) {
      const site = (process.env.VITE_SITE_URL || process.env.RENDER_EXTERNAL_URL || '').replace(
        /\/$/,
        '',
      )
      if (!site) return html
      return html.replaceAll('content="/og-image.png"', `content="${site}/og-image.png"`)
    },
  }
}

export default defineConfig({
  plugins: [react(), absoluteOgUrls()],
  preview: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 4173,
    allowedHosts: true,
  },
})
