<script setup lang="ts">
import { messagesKeys } from '../locales/i18n'
import { useStore } from '../store'

import Btn, { btnTypes } from './Btn.vue'

const store = useStore()

const handleReset = () => {
  store.mutations.reset()
}

</script>

<template>
  <btn :variant="btnTypes.DANGER" @click="handleReset">{{ $t(messagesKeys.RESET) }}</btn>

</template>