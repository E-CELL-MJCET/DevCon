import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";

const AskQues = () => {
  const [text, setText] = useState("");

  return (
    <View>
      <Text
        className="text-3xl text-white m-2"
        style={{ fontFamily: "Nunito_600SemiBold" }}
      >
        Ask your Question
      </Text>
      <View className="bg-[#ffffff] m-2 rounded">
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
