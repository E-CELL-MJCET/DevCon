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
import { supabase } from "../utils/supabase";

const search = require("../assets/search.png");

const SearchDev = () => {
  return (
    <View className="w-screen">
      <View className="w-screen flex-row items-center mt-1 h-[50px] px-5">
        <View className="h-full rounded-l-md bg-violet-200 text-white w-80 placeholder:text-white items-center justify-center">
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
    </View>
  );
};

export default SearchDev;
