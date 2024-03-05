<script setup lang="ts">
import { messagesKeys } from "../locales/i18n"
import { useStore } from '../store'

const store = useStore()

</script>

<template>
  <div class="flex flex-col items-center">
    <span>{{ $t(messagesKeys.COUNTER) }}</span>

    <span>{{ store.getters.count() }}</span>
  </div>

</template>