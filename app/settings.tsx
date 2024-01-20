import { router } from "expo-router";
import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function settings({ name, title, description, contributions, image }) {
  return (
    <View>
      <SafeAreaView className="m-4 bg-[#ffffff] rounded shadow-lg h-full flex items-center space-y-2 ">
        <Text className="">Developer</Text>
        <Image
          source={{
            uri: `$image`,
          }}
        ></Image>
        <Text>Shuja</Text>
        <Text>{description}</Text>
        <Text>{contributions}</Text>
        <Pressable
          className=""
          onPress={() => {
            router.replace("/welcome");
          }}
        >
          <Text>Log out</Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}

export default settings;