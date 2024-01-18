import { Link, Stack, router } from "expo-router";
import React from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";

const Welcome = () => {
  const goNext = () => {
    router.replace("/phoneNo");
  };
  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <View className="flex flex-col items-center justify-evenly h-full w-full">
        <View>
          <Text className="text-primaryText">Welcome to DevCon</Text>
        </View>

        <View className="w-full px-[20px]">
          <Pressable
            className="border bg-primaryBg w-full py-5 rounded-3xl items-center"
            onPress={goNext}
          >
            <Text className="text-[#ffffff]">Get Started</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
