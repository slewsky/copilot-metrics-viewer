<template>
  <pre>{{ debug }}</pre>
</template>

<script setup lang="ts">
const { data: debug } = await useFetch("/api/debug");
</script>
