import React from "react";
import { View, Text, Image } from "react-native";

import { checkImageURL } from "../../utils/checkImageUrl";

const Company = ({ companyLogo, jobTitle, companyName, location, city }) => {
  const locationIcon = require("../../assets/location.png");
  return (
    <View className="my-[12px] items-center justify-center">
      <View className="w-[80px] h-[80px] items-center justify-center bg-[#ffffff] rounded-xl">
        <Image
          source={{
            uri: checkImageURL(companyLogo)
              ? companyLogo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          className="w-[80%] h-[80%]"
        />
      </View>

      <View className="mt-[8px]">
        <Text className="text-[16px] text-[#312651] font-bold text-center">
          {jobTitle}
        </Text>
      </View>

      <View className="mt-[4px] items-center justify-center flex-row">
        <Text className="text-[12px] text-[#312651] font-medium">
          {companyName} /{" "}
        </Text>
        <View className="flex-row flex items-center justify-center">
          <Image
            source={locationIcon}
            resizeMode="contain"
            className="w-[14px] h-[14px]"
          />
          <Text className="text-[12px] ml-[2px] text-[#83829A]">
            {location}
          </Text>
          <Text className="text-[12px] ml-[2px] text-[#83829A]">- {city}</Text>
        </View>
      </View>
    </View>
  );
};

export default Company;
