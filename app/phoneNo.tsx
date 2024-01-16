import { Link, Stack, router } from "expo-router";
import React from "react";
import {
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Keyboard } from "react-native";

const PhoneNo = () => {
  const goNext = () => {
    router.replace("/otpview");
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView>
        <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
        <View className="flex flex-col items-center justify-evenly h-full w-full">
          <View>
            <Text className="text-primaryText">Enter your Phone Number</Text>
          </View>

          <View className="w-full px-[20px]">
            <TextInput
              className="w-full h-10 border px-2"
              placeholder="Enter phone number"
              keyboardType="phone-pad"
            ></TextInput>
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
    </TouchableWithoutFeedback>
  );
};

export default PhoneNo;
