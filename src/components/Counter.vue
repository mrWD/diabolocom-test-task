<script setup lang="ts">
import { useStore } from '../store'
import { messagesKeys } from '../locales/i18n'

import Btn from './Btn.vue'
import Metrics from './Metrics.vue';

const store = useStore()

const onIncrement = () => {
  store.mutations.increment()
}

const onDecrement = () => {
  store.mutations.decrement()
}

</script>

<template>
  <div class="flex justify-between">
    <btn @click="onDecrement">{{ $t(messagesKeys.DECREMENT) }}</btn>

    <metrics class="px-2" />

    <btn @click="onIncrement">{{ $t(messagesKeys.INCREMENT) }}</btn>
  </div>

</template>
