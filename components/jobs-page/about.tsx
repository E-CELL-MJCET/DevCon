import { View, Text } from "react-native";

const About = ({ info }) => {
  return (
    <View className="mt-[16px] bg-[#ffffff] rounded-[12px] p-[12px]">
      <Text className="text-[16px] text-[#312651] font-bold">
        About the job:
      </Text>

      <View className="my-[8px]">
        <Text className="text-[12px] text-[#83829A] my-[8px]">{info}</Text>
      </View>
    </View>
  );
};

export default About;
