import { Stack, router } from "expo-router";
import React, { useRef } from "react";
import {
  Keyboard,
  Pressable,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import OTPTextView from "react-native-otp-textinput";

const OTPView = () => {
  let otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
  };

  const setText = () => {
    otpInput.current.setValue("1234");
  };

  const goNext = () => {
    router.replace("/home");
  };

  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <SafeAreaView>
          <Stack.Screen options={{ headerShown: false }}></Stack.Screen>

          <View className="flex flex-col items-center justify-evenly h-full w-full ">
            <Text>Enter OTP</Text>
            <OTPTextView autoFocus inputCount={6} />
            <View className="w-full px-[20px]">
              <Pressable
                className="border bg-primaryBg w-full py-5 rounded-3xl items-center"
                onPress={goNext}
              >
                <Text className="text-[#ffffff]">Verify OTP</Text>
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default OTPView;
