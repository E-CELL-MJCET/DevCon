import React, { useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { supabase } from "../utils/supabase";
import { router } from "expo-router";
import "../utils/global.ts";

const Info = () => {
  const [username, setUsername] = useState("");
  const [uuid, setuuid] = useState("");
  useEffect(() => {
    const fetchTodos = async () => {
      const { data, error } = await supabase.from("users").select("name");

      console.log(data[0]);

      if (error) {
        console.error("Error fetching todos:", error.message);
        return;
      }
    };

    fetchTodos();
  }, []);

  const updateData = async () => {
    const { error } = await supabase.from("users").insert({
      name: username,
      tech_stack: ["React", "NextJS", "React Native"],
      recruiter: false,
    });

    if (error == null) {
      router.replace("/typeSelect");
    }
    global.console.log(error);
  };

  return (
    <View className="flex items-center justify-center">
      <TextInput
        onChangeText={setUsername}
        className="w-full px-3 h-5 border m-5"
        placeholder="Username"
        value={username}
      ></TextInput>

      <Pressable
        onPress={updateData}
        className="flex items-center justify-center h-5 mx-5 p-3 bg-[#dce1ff] rounded-2xl"
      >
        <Text>Update Data</Text>
      </Pressable>
    </View>
  );
};

export default Info;
