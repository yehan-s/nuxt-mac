<template>
  <div>
    <div
      class="w-screen h-8 px-2 fixed top-0 text-sm text-white bg-gray-700/10 backdrop-blur-2xl shadow transition flex justify-between"
    >
      <div class="flex justify-center w-[30px] items-center">
        <!-- apple -->
        <Apple theme="filled" size="16" :filled="dark ? '#000' : '#fff'" />
      </div>
      <div class="flex-1"></div>
      <!-- tools -->
      <div class="flex items-center justify-end h-full space-x-2 basis-1/6">
        <div class="relative">
          <!-- wifi -->
          <TopbarItem mo="wifiMenuSwitch" :value="controlStore.showWifiMenu">
            <Wifi
              v-show="controlStore.wifi === true"
              theme="outline"
              size="16"
              :fill="dark ? '#000' : '#fff'"
            />
            <CloseWifi
              v-show="controlStore.wifi === false"
              theme="outline"
              size="16"
              :fill="dark ? '#000' : '#fff'"
            />
          </TopbarItem>
          <MenuWifiMenu v-if="controlStore.showWifiMenu" />
        </div>
        <!-- search -->
        <TopbarItem>
          <Search theme="outline" size="16" :fill="dark ? '#000' : '#fff'" />
        </TopbarItem>
        <TopbarItem>
          <More theme="outline" size="16" :fill="dark ? '#000' : '#fff'" />
        </TopbarItem>
        <!-- battryCharge -->
        <TopbarItem
          ><BatteryCharge
            theme="outline"
            size="16"
            :fill="dark ? '#000' : '#fff'"
          />
        </TopbarItem>
        <!-- switchBtn -->
        <TopbarItem
          ><SwitchButton
            theme="outline"
            size="16"
            :fill="dark ? '#000' : '#fff'"
          />
        </TopbarItem>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Apple,
  CloseWifi,
  Wifi,
  Search,
  More,
  BatteryCharge,
  SwitchButton,
} from "@icon-park/vue-next";
import { useThemeStore } from "@/store/theme";
import { useControlStore } from "@/store/control";
const themeStore = useThemeStore();
const controlStore = useControlStore();
// let dark = themeStore.dark;
let { dark } = storeToRefs(themeStore);
// console.log(dark);
let date = ref(new Date());
</script>

<style scoped></style>
