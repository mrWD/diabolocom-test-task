<script setup lang="ts">
import { messagesKeys, i18n } from '../locales/i18n'
import { useStore } from '../store';
import Btn, { btnTypes } from './Btn.ce.vue'

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
  <Btn
    :disabled="store.getters.count(namespace) === 0"
    :variant="btnTypes.DANGER"
    @click="store.mutations.reset(namespace)"
  >
    {{ t(messagesKeys.RESET) }}
  </Btn>

</template>

<style>
@import url("../style.css");

</style>
