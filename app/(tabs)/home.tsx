import Profile from "../../components/home/profile";
import { Link, Stack, router } from "expo-router";
import { Pressable, SafeAreaView, ScrollView, View, Text } from "react-native";
import SearchDev from "../searchDev";
import React, { useState } from "react";

import {
  useFonts,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";
import AskQues from "../askQues";
import { supabase } from "../../utils/supabase";
import { Icon } from "react-native-elements";

const Home = () => {
  const [name, setName] = useState("");
  const [userid, setUserID] = useState("");
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
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
        <View className="flex flex-row items-center justify-between mr-5">
          <Pressable
            className="bg-violet-300 text-black text-lg ml-5  w-fit px-6 py-2 my-4 rounded-lg"
            onPress={goAI}
          >
            <Text
              className="text-black text-lg font-bold text-center"
              style={{ fontFamily: "Nunito_700Bold" }}
            >
              Ask AI
            </Text>
          </Pressable>
          <Pressable
            className="bg-violet-300 rounded-xl px-6 py-2 flex items-center justify-center"
            onPress={() => {
              router.push("/settings");
            }}
          >
            <Icon name="settings" size={30} color="#100" />
          </Pressable>
        </View>
        <SearchDev />
        <AskQues id={userid} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
