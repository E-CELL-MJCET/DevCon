import React from "react";
import { Text, View } from "react-native";
import { Image } from "react-native";
// import Profile from "../../assets/logos/profile.jpg";

const Profile = () => {
  return (
    <View className="px-5 py-7">
      <View className="flex flex-row justify-between items-center mb-5">
        <View></View>
        <Text
          className="text-2xl text-[#ffffff]"
          style={{ fontFamily: "Nunito_700Bold" }}
        >
          My Profile
        </Text>
        <View></View>
      </View>
      <View className="h-44 w-full rounded-xl bg-[#2c2341] px-6 py-4 flex flex-col gap-y-3">
        <View className="flex flex-row items-center justify-start gap-x-3">
          <View className="h-20 w-20 rounded-full bg-white"></View>
          <Text
            className="text-xl text-[#fff] "
            style={{ fontFamily: "Nunito_600SemiBold" }}
          >
            Abdul Basith
          </Text>
        </View>
      </View>
      <Text className="text-red-600">hello there this ia abdul basith</Text>
    </View>
  );
};

export default Profile;
