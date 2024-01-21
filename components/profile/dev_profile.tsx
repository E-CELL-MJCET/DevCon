import React from "react";
import { Text, View } from "react-native";

const DevProfile = ({ devName, techStack, score }) => {
  return (
    <View className="bg-violet-500 rounded-2xl  mx-2 mt-4">
      <Text
        className="text-white text-lg p-2 px-3 font-semibold"
        style={{ fontFamily: "Nunito_600SemiBold" }}
      >
        {devName}
      </Text>
      <Text className="text-white text-md px-3 p-2">{techStack}</Text>
      <Text className="text-white text-md px-3 py-1">
        <Text className="text-yellow-500 font-bold mb-3 pb-1">{score} </Text>
        stars
      </Text>
    </View>
  );
};

export default DevProfile;
