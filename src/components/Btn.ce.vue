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
  [btnTypes.DEFAULT]: 'enabled:hover:bg-blue-500 enabled:text-blue-700 enabled:hover:text-white enabled:border-blue-500',
  [btnTypes.DANGER]: 'enabled:hover:bg-red-500 enabled:text-red-700 enabled:hover:text-white enabled:border-red-500',
}

</script>

<template>
  <button
    :class="[
      'bg-transparent font-semibold py-2 px-4 border rounded enabled:hover:border-transparent disabled:cursor-not-allowed',
      mapVariantToClasses[variant],
    ]"
    @click="handleClick"
  >
    <slot></slot>
  </button>

</template>
