import Profile from "../../components/home/profile";
import { Link, Stack } from "expo-router";
import { Pressable, SafeAreaView, ScrollView, Text } from "react-native";
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
    <SafeAreaView className="bg-[#120126] pt-5 h-screen">
      <ScrollView className="">
        <Stack.Screen options={{ title: "Home", headerShown: true }} />
        <Text
          className="text-white pb-5 px-2 text-lg"
          style={{ fontFamily: "Nunito_700Bold" }}
        >
          Hi, Name
        </Text>
        <SearchDev />
        <AskQues />
        <Pressable className="bg-violet-300 text-black text-lg h-14 w-15 p-4 w-fit mx-12 my-4 rounded-lg">
          <Text
            className="text-black text-lg font-bold text-center"
            style={{ fontFamily: "Nunito_700Bold" }}
          >
            Submit
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
