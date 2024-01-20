import React from "react";
import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import { checkImageURL } from "../../utils/checkImageUrl";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <Pressable
      className="w-64 p-6 rounded-md 
        bg-[#ffffff]"
      shadow-medium
      shadow-color-white
      onPress={() => handleCardPress(item)}
    >
      <Pressable className="w-12 h-12 rounded-md flex justify-center items-center bg-white">
        <Image
          source={{
            uri: checkImageURL(item?.employer_logo)
              ? item.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          className="w-[70%] h-[70%]"
        />
      </Pressable>
      <Text className={`text-medium text-gray mt-2`} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View className={`mt-4`}>
        <Text className="text-lg font-medium text-[#312651]" numberOfLines={1}>
          {item.job_title}
        </Text>
        <View className={`flex-row mt-1 items-center`}>
          <Text className={`text-sm font-regular text-[#312651]`}>
            {item?.job_publisher} -
          </Text>
          <Text className={`text-sm font-regular text-gray`}>
            {item.job_country}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default PopularJobCard;
