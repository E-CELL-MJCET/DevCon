import React from "react";
import { Text, View } from "react-native";

const DevProfile = ({ devName, techStack, score }) => {
  return (
    <View className="bg-[#FFFFFF] rounded-2xl shadow-lg m-2">
      <Text className="text-black text-md p-2">{devName}</Text>
      <Text className="text-black text-md p-2">{techStack}</Text>
      <Text className="text-black text-md p-2">{score}</Text>
    </View>
  );
};

export default DevProfile;
