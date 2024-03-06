<script setup lang="ts">
import { i18n, messagesKeys } from '../locales/i18n'

import Btn from './Btn.ce.vue'
import Metrics from './Metrics.ce.vue'

const { t } = i18n.global

const model = defineModel({ default: 0 })

const handleIncrement = () => {
  model.value++
}

const handleDecrement = () => {
  if (model.value > 0) {
    model.value--
  }
}

</script>

<template>
  <div class="flex justify-center mx-auto">
    <Btn
      :disabled="model === 0"
      @click="handleDecrement"
    >
      {{ t(messagesKeys.DECREMENT) }}
    </Btn>

    <Metrics :count="model" class="px-4" />

    <Btn @click="handleIncrement">{{ t(messagesKeys.INCREMENT) }}</Btn>
  </div>

</template>

<style>
@import url("../style.css");

</style>
