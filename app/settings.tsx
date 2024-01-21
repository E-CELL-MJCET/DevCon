import { router } from "expo-router";
import React, { useState } from "react";
import { Text, View, Image, Pressable } from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "../utils/supabase";

function settings({ name, title, description, contributions }) {
  const [username, setUsername] = useState("");

  async function getData() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase
      .from("users")
      .select("name")
      .eq("uid", user.id);

    const jsonString = JSON.stringify(data);
    const regexResult = /"name":"([^"]+)"/.exec(jsonString);
    const extractedName = regexResult ? regexResult[1] : null;
    console.log(extractedName);
    setUsername(extractedName);
    //setUsername(data[0]);
  }

  getData();

  return (
    <View className="bg-[#120126]">
      <SafeAreaView className="m-4 bg-violet-200 rounded shadow-lg h-full flex items-center space-y-4  ">
        <Text
          className=" text-black text-2xl "
          style={{ fontFamily: "Nunito_700Bold" }}
        >
          Developer
        </Text>
        <Image
          source={require("../assets/user.png")}
          className="h-14 w-14 rounded"
        />
        <Text>{username}</Text>
        <Text className="px-4">
          I am a Full Stack Developer,so far I have Learned react.js and I am
          proficient in Next.js and i also have an experience of three years.I
          am currently Working in Delloite as a Senior Full stack Developer
        </Text>
        <View className="flex flex-row space-x-2 items-center">
          <Text className="text-lg">Contributions</Text>
          <Text>500</Text>
        </View>

        <Pressable
          className=" bg-violet-500 w-20 h-10 p-2 rounded-lg "
          onPress={() => {
            router.replace("/welcome");
          }}
        >
          <Text className="text-center">Log Out</Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}

export default settings;
