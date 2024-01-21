import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";

import { checkImageURL } from "../../utils/checkImageUrl";

const NearbyJobCard = ({ job, handleNavigate }) => {
  const locationIcon = require("../../assets/location.png");
  return (
    <Pressable
      className="flex justify-between items-center flex-row p-4 rounded-lg bg-violet-200 my-[6px] mx-3 "
      onPress={handleNavigate}
    >
      <Pressable className="w-14 h-14 bg-violet-300 rounded-lg p-[3px] flex justify-center items-center">
        <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          className="w-[90%] h-[80%]"
        />
      </Pressable>

      <View className="flex-1 mx-4">
        <Text
          className="font-boldbold text-lg text-black"
          numberOfLines={1}
          style={{ fontFamily: "Nunito_700Bold" }}
        >
          {job?.job_title}
        </Text>

        <View className="flex flex-row">
          <Image
            source={locationIcon}
            resizeMode="contain"
            className="w-[14px] h-[14px] mt-1"
          />
          <Text
            className="text-md font-semibold text-zinc-800 mt-1 capitalize"
            style={{ fontFamily: "Nunito_600SemiBold" }}
          >
            {job?.job_city}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default NearbyJobCard;
