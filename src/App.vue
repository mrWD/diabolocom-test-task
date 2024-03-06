<script setup lang="ts">
import Counter from './components/Counter.ce.vue'
import LocalePicker from './components/LocalePicker.ce.vue'
import Metrics from './components/Metrics.ce.vue'
import Reset from './components/Reset.ce.vue'

</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <LocalePicker class="mb-4" />

    <Counter class="mb-4" />

    <Reset class="mb-4" />

    <Metrics />
  </div>

</template>
