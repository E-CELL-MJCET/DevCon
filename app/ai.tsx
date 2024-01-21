import { Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";

const AI = () => {
  const [response, setResponse] = useState("");
  const [prompt, setPrompt] = useState("");

  const [isLoading, setLoading] = useState(false);

  const sendChatRequest = async () => {
    setLoading(true);
    const messagesArray = [];
    const userMessage = { role: "user", content: prompt };
    const systemMessage = {
      role: "system",
      content: "",
    };

    messagesArray.push(userMessage);
    messagesArray.push(systemMessage);

    const jsonBody = {
      model: "gpt-4",
      messages: messagesArray,
      max_tokens: 4000,
      temperature: 1,
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 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",
          },
          body: JSON.stringify(jsonBody),
        }
      );

      if (response.ok) {
        const responseBody = await response.json();
        const choicesArray = responseBody.choices;

        if (choicesArray.length > 0) {
          const firstChoice = choicesArray[0];
          const messageObject = firstChoice.message;
          const assistantReply = messageObject.content;

          // Now 'assistantReply' contains the content of the assistant's reply
          formatResult(assistantReply);
        } else {
          console.log("No choices in the response.");
        }
      } else {
        const errorBody = await response.text();
        console.log("Error Response Body:", errorBody);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }

    // Call the sendChatRequest function
  }; // Empty dependency array to run the effect only once on mount

  const formatResult = (assistantReply) => {
    // Add your logic to format and handle the assistant's reply
    console.log("Assistant Reply:", assistantReply);
    setResponse(assistantReply);
    setLoading(false);
  };

  return (
    <SafeAreaView className="h-screen" style={{ backgroundColor: "#120126" }}>
      <Stack.Screen
        options={{
          title: "AI",
          headerShown: false,
          statusBarColor: "#120126",
        }}
      />
      <View className="px-5 mt-10">
        <Text
          className="text-white my-4 text-[20px]"
          style={{ fontFamily: "Nunito_700Bold" }}
        >
          Ask AI
        </Text>
        <TextInput
          className="h-10 border border-white text-white  p-3 rounded-xl"
          placeholder="Enter your question"
          onChangeText={setPrompt}
          placeholderTextColor="#ffffff"
        ></TextInput>
        <Pressable
          className="w-full h-10 p-3 rounded-xl items-center justify-center bg-violet-700 mt-4"
          onPress={sendChatRequest}
        >
          <Text className="text-white">Ask</Text>
        </Pressable>
        <View className="bg-violet-200 rounded-xl p-3 mt-4">
          {isLoading ? (
            <ActivityIndicator size="large" color="#312651" />
          ) : (
            <Text
              className="text-black text-[18px]"
              style={{ fontFamily: "Nunito_700Bold" }}
            >
              {response}
            </Text>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AI;
