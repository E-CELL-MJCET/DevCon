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
    <SafeAreaView className="bg-[#DBDADE] h-screen">
      <ScrollView className="">
        <Stack.Screen options={{ title: "Home", headerShown: true }} />
        <SearchDev />
        <AskQues />
        <Pressable className="bg-[#eb74dd] h-14 w-15 p-4 mx-12 my-4 rounded">
<<<<<<< HEAD
          <Text className="text-[#fffF] text-center">Logout Button</Text>
=======
          <Text className="text-[#fffF] text-center">Submit</Text>
>>>>>>> 6bf89b37cfe50fcbeb3c13d824012a568be3dd72
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
