import { Link, Stack, router } from "expo-router";
import React, { useState } from "react";
import {
  Linking,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { supabase } from "../utils/supabase";
import { makeRedirectUri } from "expo-auth-session";
import * as QueryParams from "expo-auth-session/build/QueryParams";
import * as WebBrowser from "expo-web-browser";
import Home from "./(tabs)/home";
import Search from "@components/jobs/search";
import TypeSelect from "./typeSelect";

const goNext = () => {
  router.replace("/typeSelect");
};

async function signInWithGithub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      skipBrowserRedirect: false,
    },
  });
  if (error) throw error;
  const {
    data: { user },
  } = await supabase.auth.getUser();

  //router.setParams('uid', user.id);

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
  console.log(user);
  //console.log(user.id);
}

const Welcome = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  async function signUpWithEmail() {
    console.log("Sign up");
    let { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    console.log(data);

    if (error == null) {
      signIn();
    } else {
      console.log(error);
    }
  }

  async function signIn() {
    console.log("Sign in");
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    console.log(data);

    console.log(error);
    const userId = data.user.id;
    console.log(userId);

    if (error == null) {
      const { error } = await supabase.from("users").insert({
        name: username,
        email: email,
        //uid: userId,
        tech_stack: ["React", "NextJS", "React Native"],
        recruiter: false,
      });
      console.log(error);
      goNext();
    }
  }

  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false }}></Stack.Screen>
      <View className="flex flex-col items-center mt-52  space-y-6  h-full w-full">
        <View>
          <Text className="text-2xl font-extrabold">Welcome to DevCon</Text>
        </View>

        <View className="w-full px-[20px] flex space-y-2">
          {/* <Pressable
            className="border bg-primaryBg my-3 w-full py-5 rounded-3xl items-center"
            onPress={signInWithGithub}
          >
            <Text className="text-[#ffffff]">Sign in with Github</Text>
          </Pressable> */}

          <View className="w-full px-3 flex space-y-5">
            <TextInput
              onChangeText={setUsername}
              className="w-full px-3 h-16 border my-1 rounded"
              placeholder="Username"
              value={username}
            ></TextInput>
            <TextInput
              onChangeText={setEmail}
              className="w-full px-3 h-16 border my-1 rounded"
              placeholder="Email"
              value={email}
            ></TextInput>

            <TextInput
              onChangeText={setPassword}
              className="w-full px-3 h-16 border my-1 rounded"
              placeholder="Password"
              value={password}
            ></TextInput>
            <Pressable
              className="border bg-primaryBg w-full py-4 rounded-3xl items-center"
              onPress={signUpWithEmail}
            >
              <Text className="text-[#ffffff]">Sign up</Text>
            </Pressable>
          </View>
          <Pressable
            className="border bg-primaryBg w-80 py-4 rounded-3xl items-center mt-3"
            onPress={signIn}
          >
            <Text className="text-[#ffffff]">Sign in</Text>
          </Pressable>
          <Pressable
            className="border bg-primaryBg w-full py-5 rounded-3xl items-center mt-3"
            onPress={() => {
              router.replace("/typeSelect");
            }}
          >
            <Text className="text-[#ffffff]">Direct home</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
