import { Stack } from "expo-router";
import Card from "../components/card";
import React from "react";
import { SafeAreaView, View } from "react-native";

const TypeSelect = () => {
  return (
    <SafeAreaView className="bg-[#f4f4f4]">
      <Stack.Screen options={{ title: "Select Type", headerShown: true }} />
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
    </SafeAreaView>
  );
};

export default TypeSelect;
