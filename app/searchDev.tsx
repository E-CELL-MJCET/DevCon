import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

const search = require("../assets/search.png");

const SearchDev = () => {
  return (
    <View className="flex flex-row space-x-2 m-2">
      <View className="flex-row justify-center items-center mt-1 h-[50px]">
        <View className="flex-1 h-full w-full rounded-l-md bg-violet-200 text-white  placeholder:text-white items-center justify-center">
          <TextInput
            className="font-regular w-full h-5 pl-4 placeholder:text-black"
            style={{ fontFamily: "Nunito_600SemiBold" }}
            placeholder="What are you looking for?"
          />
        </View>

        <Pressable className="w-12 h-full bg-violet-600 rounded-r-md flex items-center justify-center">
          <Image
            source={search}
            resizeMode="contain"
            style={{ width: "50%", height: "50%", tintColor: "#ffffff" }}
          />
        </Pressable>
      </View>
      <Pressable
        className="bg-[#ffffff] rounded-xl h-12 w-10 flex items-center justify-center"
        onPress={() => {
          router.push("/settings");
        }}
      >
        <Icon name="settings" size={30} color="#100" />
      </Pressable>
    </View>
  );
};

export default SearchDev;
