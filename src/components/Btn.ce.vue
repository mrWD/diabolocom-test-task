<script setup lang="ts">
const emit = defineEmits(['click'])

const { variant } = defineProps({
  variant: {
    default: btnTypes.DEFAULT,
  },
})

const handleClick = () => {
  emit('click')
}

</script>

<script lang="ts">
export enum btnTypes {
  DEFAULT = 'DEFAULT',
  DANGER = 'DANGER',
}

const mapVariantToClasses = {
  [btnTypes.DEFAULT]: 'hover:bg-blue-500 text-blue-700 hover:text-white border-blue-500',
  [btnTypes.DANGER]: 'hover:bg-red-500 text-red-700 hover:text-white border-red-500',
}

</script>

<template>
  <button
    :class="['bg-transparent font-semibold py-2 px-4 border hover:border-transparent rounded', mapVariantToClasses[variant]]"
    @click="handleClick"
  >
    <slot></slot>
  </button>

</template>
