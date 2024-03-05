<script setup lang="ts">
import { messagesKeys } from "../locales/i18n"
import { useStore } from '../store'

const store = useStore()

</script>

<template>
  <div>
    <span>{{ $t(messagesKeys.COUNTER) }}: {{ store.getters.count() }}</span>
  </div>

</template>