<script setup lang="ts">
import { i18n, messagesKeys } from '../locales/i18n'
import { useStore } from '../store';

import Btn from './Btn.ce.vue'
import Metrics from './Metrics.ce.vue'

const { t } = i18n.global

const store = useStore()

const { namespace } = defineProps({
  namespace: {
    type: String,
    default: '',
  },
})

</script>

<template>
  <div class="flex justify-center mx-auto">
    <Btn
      :disabled="store.getters.count(namespace) === 0"
      @click="store.mutations.decrement(namespace)"
    >
      {{ t(messagesKeys.DECREMENT) }}
    </Btn>

    <Metrics
      class="px-4"
      :namespace="namespace"
      :count="store.getters.count(namespace)"
    />

    <Btn @click="store.mutations.increment(namespace)">{{ t(messagesKeys.INCREMENT) }}</Btn>
  </div>

</template>

<style>
@import url("../style.css");

</style>
