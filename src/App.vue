<script setup lang="ts">
import Counter from './components/Counter.vue'
import LocalePicker from './components/LocalePicker.vue'
import Metrics from './components/Metrics.vue'
import Reset from './components/Reset.vue'

</script>

<template>
  <div class="flex flex-col items-center">
    <locale-picker class="mb-2" />

    <counter class="mb-2" />

    <reset class="mb-2" />

    <metrics />
  </div>

</template>
