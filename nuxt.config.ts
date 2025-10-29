export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui'
  ],
  ui: {
    global: true,
    icons: ['heroicons', 'simple-icons']
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    // Private keys (only available on server-side)
    jwtSecret: process.env.JWT_SECRET,
    mongoUri: process.env.MONGODB_URI,
    // Public keys (exposed to client-side)
    public: {
      apiBase: process.env.API_BASE_URL || '/api'
    }
  },
  nitro: {
    experimental: {
      wasm: true
    }
  }
})