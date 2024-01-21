import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";

const AskQues = () => {
  const [text, setText] = useState("");

  return (
    <View>
      <Text
        className="text-3xl text-white mt-5 mx-5"
        style={{ fontFamily: "Nunito_600SemiBold" }}
      >
        Ask your Question
      </Text>
      <View className="bg-violet-200 mx-5 mt-2  rounded-lg">
        <TextInput
          className=" h-40 text-lg p-2"
          placeholder="Ask your question here ..."
          editable
          multiline
          numberOfLines={5}
          maxLength={100}
          onChangeText={setText}
          value={text}
        ></TextInput>
      </View>
    </View>
  );
};

export default AskQues;
