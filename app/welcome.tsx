import { Link, Stack, router } from "expo-router";
import React from "react";
import { Linking, Pressable, SafeAreaView, Text, View } from "react-native";
import { supabase } from "../utils/supabase";
import { makeRedirectUri } from "expo-auth-session";
import * as QueryParams from "expo-auth-session/build/QueryParams";
import * as WebBrowser from "expo-web-browser";

const goNext = () => {
  router.replace("/home");
};

async function signInWithGithub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      skipBrowserRedirect: false,
    },
  });
  if (error) throw error;

  const res = await WebBrowser.openAuthSessionAsync(data?.url ?? "");
  console.log(res);
  if (res.type === "success" && res.url) {
    // Extract any necessary information from the URL
    const urlParts = res.url.split("?");
    if (urlParts.length > 1) {
      const queryParams: { [key: string]: string } = {};
      const queryString = urlParts[1];
      const pairs = queryString.split("&");
      pairs.forEach((pair) => {
        const [key, value] = pair.split("=");
        queryParams[key] = value;
      });

      // Now queryParams contains the extracted parameters
      console.log(queryParams);
    }
    // Process the information or redirect as needed
  }

  goNext();
  console.log("Sign in with github");
}

const Welcome = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <View className="flex flex-col items-center justify-evenly h-full w-full">
        <View>
          <Text className="text-primaryText">Welcome to DevCon</Text>
        </View>

        <View className="w-full px-[20px]">
          <Pressable
            className="border bg-primaryBg w-full py-5 rounded-3xl items-center"
            onPress={goNext}
          >
            <Text className="text-[#ffffff]">Get Started</Text>
          </Pressable>

          <Pressable
            className="border bg-primaryBg my-3 w-full py-5 rounded-3xl items-center"
            onPress={signInWithGithub}
          >
            <Text className="text-[#ffffff]">Sign in with Github</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
