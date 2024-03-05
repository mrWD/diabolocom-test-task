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
    <Btn @click="onDecrement">{{ t(messagesKeys.DECREMENT) }}</Btn>

    <Metrics class="px-4" />

    <Btn @click="onIncrement">{{ t(messagesKeys.INCREMENT) }}</Btn>
  </div>

</template>

<style>
@import url("../style.css");

</style>
