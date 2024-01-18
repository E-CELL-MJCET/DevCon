import Profile from "../../components/home/profile";
import { Link, Stack } from "expo-router";
import { SafeAreaView, ScrollView, Text } from "react-native";

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
        <Link href={"/welcome"}>
          <Text className="text-[#ffffff]">Logout Button</Text>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
