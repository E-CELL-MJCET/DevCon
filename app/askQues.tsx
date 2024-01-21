import React, { useState } from "react";
import { TextInput, View, Text, Pressable } from "react-native";
import { supabase } from "../utils/supabase";

const AskQues = (id) => {
  const [text, setText] = useState("");

  const uploadQues = async () => {
    const { error } = await supabase
      .from("questions")
      .insert({ question: text, asked_by: id });

    setText("");
  };

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
      <Pressable className="bg-violet-600 text-black text-lg  p-4 w-fit mx-12 my-7 rounded-lg">
        <Text
          className="text-white text-lg font-bold text-center"
          style={{ fontFamily: "Nunito_700Bold" }}
          onPress={uploadQues}
        >
          Submit
        </Text>
      </Pressable>
    </View>
  );
};

export default AskQues;
