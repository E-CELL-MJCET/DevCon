import { Stack } from "expo-router";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";

const Recuriter = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: "Recruiter", headerShown: false }} />
      <Text>Recuriter</Text>
    </SafeAreaView>
  );
};

export default Recuriter;
