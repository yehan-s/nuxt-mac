<template>
  <div
    ref="menuRef"
    class="absolute w-56 h-10 px-4 rounded-md -left-28 top-7"
    :class="[dark ? 'bg-black/40 text-white/80' : 'bg-white/80 text-black']"
  >
    <label class="cursor-pointer label">
      <span class="font-medium">Wi-Fi</span>
      <input
        type="checkbox"
        class="toggle toggle-primary"
        :checked="controlStore.wifi"
        @click="controlStore.wifiSwitch(!controlStore.wifi)"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/store/theme";
import { useControlStore } from "@/store/control";

const themeStore = useThemeStore();
const controlStore = useControlStore();
let { dark } = storeToRefs(themeStore);

const menuRef = ref<HTMLDivElement | null>(null);

// click outside
const handleClickOutside = (event: { target: any }) => {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    controlStore.wifiMenuSwitch(false);
    console.log("click outside");
  }
};

onMounted(() => {
  window.addEventListener("click", handleClickOutside);
  console.log("mounted");
  
});

onUnmounted(() => {
  window.addEventListener("click", handleClickOutside);
  console.log("unmounted");
});
</script>

<style scoped></style>
