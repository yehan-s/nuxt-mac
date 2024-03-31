interface ThemeState {
  [index: string]: any;
  dark: Ref<boolean>;
  brightness: Ref<number>;
  setDark: (value: boolean) => void;
  setBrightness: (value: number) => void;
}

export const useThemeStore = defineStore("theme.ts", (): ThemeState => {
  let dark = ref(false);
  let brightness = ref(80);
  const setDark = (value: boolean) => {
    dark.value = value;
  };
  const setBrightness = (value: number) => {
    brightness.value = value;
  };

  return { dark, brightness, setDark, setBrightness };
});
