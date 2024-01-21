import React from "react";
import { View, Text } from "react-native";

const NewsDetails = ({ heading, content }) => {
  return (
    <View className="bg-[#FFFFFF] rounded-2xl shadow-lg m-2">
      <Text className="text-black text-md p-2 ">{heading}</Text>
      <Text className="text-black text-sm ">{content}</Text>
    </View>
  );
};

export default NewsDetails;
