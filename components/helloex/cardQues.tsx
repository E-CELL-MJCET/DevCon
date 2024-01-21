import { View, Text, Image, Pressable } from "react-native";
import React from "react";

const CardQues = () => {
  return (
    <View className="bg-violet-900 w-72 h-36 mx-2 rounded-md">
      <View className="flex flex-col px-5 py-2">
        <View className="flex flex-row gap-x-3 items-center">
          <Image
            source={require("../../assets/profile.jpeg")}
            className="h-10 w-10 rounded-full"
          />
          <Text
            style={{ fontFamily: "Nunito_600SemiBold" }}
            className="font-bold text-md text-white"
          >
            John Doe
          </Text>
        </View>
        <Text
          numberOfLines={3}
          ellipsizeMode="tail"
          className="text-white mt-1 mx-1"
          style={{ fontFamily: "Nunito_600SemiBold" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          provident optio nam ut quam ipsa ratione molestias officia deserunt p
          raesentium eveniet dolorem minus, fugiat quis quisquam. Veritatis eos
          inventore incidunt corrupti asperiores et vel.
        </Text>

        <Pressable>
          <Text className="mt-2 text-right text-white">Read More...</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CardQues;
