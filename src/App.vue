<script setup lang="ts">
import Counter from './components/Counter.ce.vue'
import LocalePicker from './components/LocalePicker.ce.vue'
import Metrics from './components/Metrics.ce.vue'
import Reset from './components/Reset.ce.vue'

</script>

<template>
  <div class="flex flex-col items-center">
    <LocalePicker class="mb-2" />

    <Counter class="mb-2" />

    <Reset class="mb-2" />

    <Metrics />
  </div>

</template>
