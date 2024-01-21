import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { Link, Stack, router } from "expo-router";
import { supabase } from "../utils/supabase";

const Card = ({ title, description, direction }) => {
  const goNext = () => {
    if (direction == 1) {
      SelectDev();
    } else {
      SelectRecruiter();
    }
  };

  const SelectDev = () => {
    const updateDev = async () => {
      const { error } = await supabase
        .from("users")
        .update({
          recruiter: false,
        })
        .eq("username");

      if (error == null) {
        router.replace("/home");
      }

      console.log(error);
    };

    updateDev();
  };

  const SelectRecruiter = () => {
    const updateRecruit = async () => {
      const { error } = await supabase.from("users").insert({
        recruiter: false,
      });

      if (error == null) {
        router.replace("/recuriter");
      }

      console.log(error);
    };

    updateRecruit();
  };
  return (
    <View className="flex justify-between items-center p-4 rounded-2xl bg-[#ffffff] my-5 mx-3 space-y-4">
      <Text className="flex text-center text-lg font-semibold text-[#312651]">
        {title}
      </Text>
      <Text className="text-[#312651]">{description}</Text>
      <Pressable
        className="p-4 mx-2 rounded-full bg-[#191f91] w-full"
        onPress={goNext}
      >
        <Text className="text-center text-[#ffffff]">Next</Text>
      </Pressable>
    </View>
  );
};
export default Card;
