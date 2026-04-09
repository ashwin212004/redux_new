import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  server: {
    headers: {
      "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
      "X-Frame-Options": "SAMEORIGIN",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "geolocation=(self)",
      "Content-Security-Policy": `
        default-src 'self';
        script-src 'self' 'unsafe-inline' https:;
        style-src 'self' 'unsafe-inline' https:;
        img-src 'self' data: https:;
        font-src 'self' https:;
        connect-src 'self' https:;
        frame-src 'self' https:;
        object-src 'none';
        base-uri 'none';
      `.replace(/\n/g, "")
    }
  }
})
