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

const SearchDev = () => {
  return (
    <View className="flex flex-row space-x-2 m-2">
      <TextInput
        className="bg-[#edf1ef] w-80 mx-2 h-10"
        editable
        maxLength={10}
      ></TextInput>
      <Pressable>
        <Image
          className="h-10 w-10 rounded"
          source={require("../assets/icon.png")}
        ></Image>
      </Pressable>
    </View>
  );
};

export default SearchDev;
