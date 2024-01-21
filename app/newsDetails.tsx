import React from "react";
import { View, Text, Pressable } from "react-native";
import { Image } from "react-native-elements";

const NewsDetails = ({ heading, content, name, read }) => {
  return (
    <View className="bg-violet-300 rounded-2xl p-6 shadow-lg m-2 ">
      <Text
        className="text-black text-md font-bold p-2 "
        style={{ fontFamily: "Nunito_600SemiBold" }}
      >
        {heading}
      </Text>
      <View className="flex flex-row space-x-2">
        <Image source={require("../assets/user.png")} className="h-10 w-10" />
        <View className="flex flex-col">
          <Text
            className="text-black text-sm"
            style={{ fontFamily: "Nunito_600SemiBold" }}
          >
            {name}
          </Text>
          <Text className="text-black text-xs">{read} mins read</Text>
        </View>
      </View>
      <Text
        numberOfLines={5}
        ellipsizeMode="tail"
        className="text-black text-sm py-2 "
        style={{ fontFamily: "Nunito_600SemiBold" }}
      >
        {content}
      </Text>
      <View className="w-32 mt-2">
        <Pressable className="bg-violet-700 px-4 py-1 rounded-md w-fit">
          <Text className="w-fit text-white">Read More...</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NewsDetails;
