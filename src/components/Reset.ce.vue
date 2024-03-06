<script setup lang="ts">
import { messagesKeys } from '../locales/i18n'

import Btn, { btnTypes } from './Btn.ce.vue'
import { i18n } from '../locales/i18n'

const { t } = i18n.global

const model = defineModel({ default: 0 })

const handleReset = () => {
  model.value = 0
}

</script>

<template>
  <Btn
    :disabled="model === 0"
    :variant="btnTypes.DANGER"
    @click="handleReset"
  >
    {{ t(messagesKeys.RESET) }}
  </Btn>

</template>

<style>
@import url("../style.css");

</style>
