<script setup lang="ts">
import { watch } from "vue"
import { i18n, languages, setDefaultLanguage } from "../locales/i18n"

const { locale } = i18n.global

watch(locale, newLang => {
  setDefaultLanguage(newLang as languages)
})

</script>

<template>
  <select
    v-model="locale"
    class="w-20 mx-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
    <option
      v-for="lang in languages"
      :key="lang"
      :id="lang"
      :value="lang"
      type="radio"
      name="language"
    >
      {{ lang }}
    </option>

  </select>

</template>

<style>
@import url("../style.css");

</style>
