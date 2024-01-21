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
      <SafeAreaView className="m-4 bg-[#ffffff] rounded shadow-lg h-full flex items-center space-y-2 ">
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
        <Text>{description}</Text>
        <Text>{contributions}</Text>
        <Pressable
          className=""
          onPress={() => {
            router.replace("/welcome");
          }}
        >
          <Text>Submit</Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}

export default settings;
