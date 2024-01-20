import Profile from "../../components/home/profile";
import { Link, Stack } from "expo-router";
import { SafeAreaView, ScrollView, Text, TextInput } from "react-native";
import SearchDev from "../searchDev";
import React, { useState } from "react";

import {
  useFonts,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import AskQues from "../askQues";

const Home = () => {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });
  const [data, setData] = useState("");

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView className="bg-[#ffff] h-screen">
      <ScrollView className="">
        <Stack.Screen options={{ title: "Home", headerShown: true }} />
        <SearchDev />
        <AskQues />
        <Link href={"/welcome"}>
          <Text className="text-[#a73a3a]">Logout Button</Text>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
