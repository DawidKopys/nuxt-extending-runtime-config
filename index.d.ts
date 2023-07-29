declare module 'nuxt/schema' {
  interface RuntimeConfig {
    apiSecret: string
    public: {
      apiBase: strint
    }
  }
  interface PublicRuntimeConfig {
    apiBaseButItWorks: number
  }
}

export {}
