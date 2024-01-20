<<<<<<< HEAD
import React from "react";
import { View, Text } from "react-native";

const Recuriter = () => {
  return (
    <View>
      <Text>Recuriter</Text>
    </View>
=======
import { Stack } from "expo-router";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";

const Recuriter = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: "Recruiter", headerShown: false }} />
      <Text>Recuriter</Text>
    </SafeAreaView>
>>>>>>> 6bf89b37cfe50fcbeb3c13d824012a568be3dd72
  );
};

export default Recuriter;
