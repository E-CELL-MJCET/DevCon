import React from "react";
import { Text, View } from "react-native";

const Profile = () => {
  return (
    <View className="p-5">
      <View className="flex flex-row justify-between items-center mb-3">
        <View></View>
        <Text
          className="text-white text-2xl"
          style={{ fontFamily: "Nunito_700Bold" }}
        >
          My Profile
        </Text>
        <View></View>
      </View>
      <View className="">
        <View></View>
      </View>
    </View>
  );
};

export default Profile;
