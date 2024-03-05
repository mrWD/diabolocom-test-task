<script setup lang="ts">
import { useStore } from '../store'
import { messagesKeys } from '../locales/i18n'

import Btn from './Btn.vue'

const store = useStore()

const onIncrement = () => {
  store.mutations.increment()
}

const onDecrement = () => {
  store.mutations.decrement()
}

</script>

<template>
    <Btn class="mr-10" @click="onDecrement">{{ $t(messagesKeys.DECREMENT) }}</Btn>

    <Btn @click="onIncrement">{{ $t(messagesKeys.INCREMENT) }}</Btn>

</template>
