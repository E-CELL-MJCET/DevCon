import React, { useEffect, useState } from "react";
import { Pressable, SafeAreaView, Text, TextInput, View } from "react-native";

const AI = () => {
  const [response, setResponse] = useState("");
  const [prompt, setPrompt] = useState("");

  const sendChatRequest = async () => {
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
            Authorization: "Bearer ", // Replace with your OpenAI API key
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
  };
  return (
    <SafeAreaView>
      <View className="px-5 my-3 ">
        <TextInput
          className="h-10 border p-3 rounded-xl"
          placeholder="Enter your question"
          onChangeText={setPrompt}
        ></TextInput>
        <Pressable
          className="w-full h-10 p-3 rounded-xl items-center justify-center bg-primaryBg mt-4"
          onPress={sendChatRequest}
        >
          <Text className="text-white">Ask</Text>
        </Pressable>
        <Text className="mt-5">{response}</Text>
      </View>
    </SafeAreaView>
  );
};

export default AI;
