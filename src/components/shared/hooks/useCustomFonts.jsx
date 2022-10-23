import { useFonts } from "expo-font";
import { useCallback, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

export const useCustomFonts = () => {
  const [fontsLoaded] = useFonts({
    // @ts-ignore
    "FiraSans-Regular": require("../../../../assets/fonts/FiraSans-Regular.ttf"),
    // @ts-ignore
    "FiraSans-Medium": require("../../../../assets/fonts/FiraSans-Medium.ttf"),
    // @ts-ignore
    "FiraSans-SemiBold": require("../../../../assets/fonts/FiraSans-SemiBold.ttf"),
  });
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);
  return fontsLoaded;
};
