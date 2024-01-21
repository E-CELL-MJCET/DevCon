import { Stack, router } from "expo-router";
import Card from "../components/card";
import React from "react";
import { SafeAreaView, View } from "react-native";
import { supabase } from "../utils/supabase";

const TypeSelect = () => {
  return (
    <SafeAreaView className="bg-[#120126] h-screen flex flex-col ">
      <Stack.Screen options={{ title: "Select Type", headerShown: true }} />
      <View className="top-[17%]">
        <Card
          title="Developer"
          description="As a developer you can explore the trending tech stack"
          direction={1}
        ></Card>
        <Card
          title="Recuriter"
          description="As a Recuriter you can explore the required developer for your tech stack"
          direction={2}
        ></Card>
      </View>
    </SafeAreaView>
  );
};

export default TypeSelect;
