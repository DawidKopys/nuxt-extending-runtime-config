<template>
  <div>
    <h1>Some text</h1>
  </div>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from "#imports"

const runtimeConfig = useRuntimeConfig()
console.log(runtimeConfig.public.apiBaseButItWorks)
</script>
