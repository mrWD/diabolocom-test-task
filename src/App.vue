<script setup lang="ts">
import { ref } from 'vue';
import Counter from './components/Counter.ce.vue'
import LocalePicker from './components/LocalePicker.ce.vue'
import Metrics from './components/Metrics.ce.vue'
import Reset from './components/Reset.ce.vue'

const count = ref(0)

</script>

<template>
  <div class="flex flex-col items-center">
    <LocalePicker class="mb-4" />

    <Counter class="mb-4" v-model="count" />

    <Reset class="mb-4" v-model="count" />

    <Metrics :count="count" />
  </div>

</template>
