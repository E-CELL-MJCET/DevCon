import QuestionComp from "../../components/helloex/questionComp";
import React from "react";
import { View, Text, FlatList } from "react-native";

function Explore() {
  return (
    <View className="bg-[#120126] h-full">
      <Text
        className="text-center text-xl text-white font-semibold my-4"
        style={{ fontFamily: "Nunito_600SemiBold" }}
      >
        Help Others
      </Text>
      <View>
        <QuestionComp />
      </View>
    </View>
  );
}

export default Explore;
