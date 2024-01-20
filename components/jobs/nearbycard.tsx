import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";

import { checkImageURL } from "../../utils/checkImageUrl";

const NearbyJobCard = ({ job, handleNavigate }) => {
  return (
    <Pressable
      className="flex justify-between items-center flex-row p-4 rounded-2xl bg-[#ffffff] my-1 mx-3 "
      onPress={handleNavigate}
    >
      <Pressable className="w-12 h-12 bg-white rounded-2xl flex justify-center items-center">
        <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg",
          }}
          resizeMode="contain"
          className="w-[70%] h-[70%]"
        />
      </Pressable>

      <View className="flex-1 mx-4">
        <Text className="font-bold text-[#312651]" numberOfLines={1}>
          {job?.job_title}
        </Text>

        <Text className="text-small text-[#83829A] mt-1 capitalize">
          {job?.job_employment_type}
        </Text>
      </View>
    </Pressable>
  );
};

export default NearbyJobCard;
