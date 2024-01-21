import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  FlatListComponent,
  ScrollView,
} from "react-native";
import React from "react";
import { isLoading } from "expo-font";
import { useRouter } from "expo-router";
import useFetch from "../../hook/useFetch";
import CardQues from "./cardQues";

const QuestionComp = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch("search", {
    query: "React",
    num_pages: "1",
  });
  return (
    <View>
      <Text
        className="text-lg text-violet-200 mx-2 mb-3 font-semibold"
        style={{ fontFamily: "Nunito_600SemiBold" }}
      >
        Next Js
      </Text>
      <ScrollView horizontal>
        <CardQues />
        <CardQues />
        <CardQues />
        <CardQues />
      </ScrollView>
      <View></View>
    </View>
  );
};

export default QuestionComp;
