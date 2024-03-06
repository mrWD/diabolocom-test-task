<script setup lang="ts">
import { i18n, messagesKeys } from "../locales/i18n"
import { useStore } from "../store";

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
  <div class="flex flex-col items-center">
    <span>{{ t(messagesKeys.COUNTER) }}</span>

    <span data-testid="counter">{{ store.getters.count(namespace) }}</span>
  </div>

</template>

<style>
@import url("../style.css");

</style>
