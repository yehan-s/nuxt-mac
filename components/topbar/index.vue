<template>
  <div>
    <div
      class="w-screen h-8 px-2 fixed top-0 text-sm text-white bg-gray-700/10 backdrop-blur-2xl shadow transition flex justify-between"
    >
      <div class="flex justify-center w-[30px] items-center">
        <!-- apple -->
        <Apple theme="filled" size="16" :filled="dark ? '#000' : '#fff'" />
      </div>
      <!-- <div class="flex-1"></div> -->
      <div class="flex items-center justify-end h-full space-x-2 basis-1/6">
        <TopbarItem>
          <Wifi theme="outline" size="16" fill="#333" />
        </TopbarItem>
        <TopbarItem>
          <Search theme="outline" size="16" fill="#333" />
        </TopbarItem>
        <TopbarItem>
          <More theme="outline" size="16" fill="#333" />
        </TopbarItem>
        <TopbarItem
          ><BatteryCharge theme="outline" size="16" fill="#333" />
        </TopbarItem>
        <TopbarItem
          ><SwitchButton theme="outline" size="16" fill="#333" />
        </TopbarItem>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Apple,
  Wifi,
  Search,
  More,
  BatteryCharge,
  SwitchButton,
} from "@icon-park/vue-next";
import { useThemeStore } from "@/store/theme";
const themeStore = useThemeStore();
let dark = themeStore.dark;
console.log(dark);
let date = ref(new Date());
</script>

<style scoped></style>
