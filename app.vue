<template>
  <div>
    <h1>Some text</h1>
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig.aaa);
</script>
