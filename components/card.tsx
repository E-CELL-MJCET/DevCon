import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { Link, Stack, router } from "expo-router";

const Card = ({ title, description, direction }) => {
  const goNext = () => {
    if (direction == 1) {
<<<<<<< HEAD
      router.replace("/settings");
    } else {
      router.replace("/home");
=======
      router.replace("/home");
    } else {
      router.replace("/recuriter");
>>>>>>> 6bf89b37cfe50fcbeb3c13d824012a568be3dd72
    }
  };
  return (
    <View className="border rounded p-4 shadow-lg flex space-y-4 m-4 bg-[#F9EFDB]">
      <Text className="flex text-center text-lg font-semibold">{title}</Text>
      <Text className="">{description}</Text>
      <Pressable
        className="bg-[#DC84F3] p-4 mx-2 rounded-full"
        onPress={goNext}
      >
        <Text className="text-center">Next</Text>
      </Pressable>
    </View>
  );
};
export default Card;
