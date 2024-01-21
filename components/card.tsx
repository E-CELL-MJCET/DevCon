import React, { useState } from "react";
import { View, Text, Pressable, Image } from "react-native";
import { Link, Stack, router } from "expo-router";
import { supabase } from "../utils/supabase";

const Card = ({ title, description, direction }) => {
  const [userid, setUserID] = useState("");
  const goNext = () => {
    if (direction == 1) {
      SelectDev();
    } else {
      SelectRecruiter();
    }
  };

  const SelectDev = () => {
    async function getData() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUserID(user.id);
    }
    getData();

    const updateDev = async () => {
      const { error } = await supabase
        .from("users")
        .update({
          recruiter: false,
        })
        .eq("uid", userid);

      if (error == null) {
        router.replace("/home");
      }

      console.log(error);
    };

    updateDev();
  };

  const SelectRecruiter = () => {
    const updateRecruit = async () => {
      const { error } = await supabase
        .from("users")
        .update({
          recruiter: true,
        })
        .eq("uid", userid);

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
