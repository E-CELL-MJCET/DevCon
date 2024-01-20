import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";

const Textarea = () => {
  const [text, setText] = useState("");

  return (
    <View>
      <Text className="text-3xl text-black m-2">Ask your Question</Text>
      <View className="bg-[#edf1ef] m-2 rounded">
        <TextInput
          className=" h-20 text-lg p-2"
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

export default Textarea;
