import Profile from "../../components/home/profile";
import { Link, Stack, router } from "expo-router";
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
import { supabase } from "../../utils/supabase";

const Home = () => {
  const [name, setName] = useState("");
  const [userid, setUserID] = useState("");
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  async function getData() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    setUserID(user.id);
  }
  getData();

  async function getName() {
    const { data, error } = await supabase
      .from("users")
      .select("name")
      .eq("uid", userid);

    const jsonString = JSON.stringify(data);
    const regexResult = /"name":"([^"]+)"/.exec(jsonString);
    const extractedName = regexResult ? regexResult[1] : null;

    if (extractedName) {
      setName(extractedName);
    }
  }

  getName();

  function goAI() {
    router.push("/ai");
  }
  return (
    <SafeAreaView className="bg-[#120126] pt-5 h-screen">
      <ScrollView className="">
        <Stack.Screen options={{ title: "Home", headerShown: true }} />
        <Text
          className="text-white pb-5 px-2 text-lg mt-4"
          style={{ fontFamily: "Nunito_700Bold" }}
        >
          Hi, {name}
        </Text>
        <Pressable
          className="bg-violet-300 text-black text-lg h-14 w-15 p-4 w-fit mx-12 my-4 rounded-lg"
          onPress={goAI}
        >
          <Text
            className="text-black text-lg font-bold text-center"
            style={{ fontFamily: "Nunito_700Bold" }}
          >
            Ask AI
          </Text>
        </Pressable>
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
