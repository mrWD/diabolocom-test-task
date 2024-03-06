<script setup lang="ts">
import { i18n, messagesKeys } from "../locales/i18n"

const { t } = i18n.global

const { count } = defineProps({
  count: {
    type: Number,
    default: 0,
  }
})

</script>

<template>
  <div class="flex flex-col items-center">
    <span>{{ t(messagesKeys.COUNTER) }}</span>

    <span>{{ count }}</span>
  </div>

</template>

<style>
@import url("../style.css");

</style>