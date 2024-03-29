interface ControlState {
  date: Ref<Date>;
  wifi: Ref<boolean>;
  showControlCenter: Ref<boolean>;
  showWifiMenu: Ref<boolean>;
  showAppleMenu: Ref<boolean>;
  wifiSwitch: (value: boolean) => void;
}

export const useCtrolStore = defineStore("control", (): ControlState => {
  let date = ref(new Date());
  let wifi = ref(false);
  let showControlCenter = ref(false);
  let showWifiMenu = ref(false);
  let showAppleMenu = ref(false);
  const wifiSwitch = (value: boolean) => {
    wifi.value = value;
  };
  return {
    date,
    wifi,
    showControlCenter,
    showWifiMenu,
    showAppleMenu,
    wifiSwitch,
  };
});
