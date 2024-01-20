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

const SearchDev = () => {
  return (
    <View className="flex flex-row space-x-2 m-2">
      <View className="flex flex-row space-x-0 rounded">
        <View className="bg-[#ffffff]  h-12 w-8 flex items-center justify-center">
          <Icon name="search" type="font-awesome" color="#517fa4" />
        </View>
        <TextInput
          className="bg-[#ffffff] w-80  h-12 "
          editable
          maxLength={10}
          placeholder="    Search here ..."
        ></TextInput>
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
