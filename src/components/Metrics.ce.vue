<script setup lang="ts">
import { i18n, messagesKeys } from "../locales/i18n"
import { useStore } from '../store'

const { t } = i18n.global

const store = useStore()

</script>

<template>
  <div class="flex flex-col items-center">
    <span>{{ t(messagesKeys.COUNTER) }}</span>

    <span>{{ store.getters.count() }}</span>
  </div>

</template>

<style>
@import url("../style.css");

</style>