# Nuxt 3 - manually typing runtime config

## Setup

```
# install
npm i

# run type tests
npm run typecheck
```

The test will fail with result:

```
 FAIL  tests/runtime-config.test-d.ts > runtime configuration can be extended
TypeCheckError: Argument of type 'unknown' is not assignable to parameter of type 'string'.
 ❯ tests/runtime-config.test-d.ts:9:22
      7|   assertType<string>(config.apiSecret)
      8|   assertType<string>(config.public.apiBaseButItWorks)
      9|   assertType<string>(config.public.apiBase)
       |                      ^
     10| })
     11|
```

## Context

According to [Nuxt 3 docs](https://nuxt.com/docs/guide/going-further/runtime-config#manually-typing-runtime-config), runtime config can be typed manually as below:

```
declare module 'nuxt/schema' {
  interface RuntimeConfig {
    apiSecret: string
    public: {
      apiBase: string
    }
  }
}

export {}
```

... but the "public" part doesn't work. It appears that the correct way to do it would be:
```
declare module 'nuxt/schema' {
  interface RuntimeConfig {
    apiSecret: string
  }
  interface PublicRuntimeConfig {
    apiBase: string
  }
}

export {}
```


