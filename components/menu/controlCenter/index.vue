<template>
  <div
    class="absolute p-3 rounded-[13px] w-80 h-96 top-7 -left-44 flex flex-col shadow"
    :class="[themeStore.dark ? 'bg-[#1a2133]/90 ' : 'bg-white/40']"
  ></div>
</template>

<script setup lang="ts">
import { useThemeStore } from "~/store/theme";
import { useControlStore } from "~/store/control";
const themeStore = useThemeStore();
const controlStore = useControlStore();


</script>

<style scoped></style>
