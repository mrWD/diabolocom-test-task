<script setup lang="ts">
import { useStore } from '../store'
import { i18n, messagesKeys } from '../locales/i18n'

import Btn from './Btn.ce.vue'
import Metrics from './Metrics.ce.vue'

const { t } = i18n.global

const store = useStore()

const onIncrement = () => {
  store.mutations.increment()
}

const onDecrement = () => {
  store.mutations.decrement()
}

</script>

<template>
  <div class="flex justify-center mx-auto mb-4">
    <btn @click="onDecrement">{{ t(messagesKeys.DECREMENT) }}</btn>

    <metrics class="px-4" />

    <btn @click="onIncrement">{{ t(messagesKeys.INCREMENT) }}</btn>
  </div>

</template>

<style>
@import url("../style.css");

</style>
