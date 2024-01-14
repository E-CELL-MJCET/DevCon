import Profile from "../../components/home/profile";
import { Stack } from "expo-router";
import { SafeAreaView, ScrollView } from "react-native";

import {
  useFonts,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

const Home = () => {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView className="bg-primaryBg h-screen">
      <ScrollView className="">
        <Stack.Screen options={{ title: "Home", headerShown: true }} />
        <Profile />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
